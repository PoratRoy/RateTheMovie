import React, { useState } from "react";
import { ElectedCardProps } from "../../../../models/types/props";
import Droppable from "../../../dnd/Droppable";
import { useGamePlayContext } from "../../../../context/GamePlayContext";
import Img from "../../core/Img";
import Card from "../../core/Card";
import { getAbove, getCardFront, getCorrectPlayers } from "../../../../utils/card";
import ElectedCardWrapper from "../../core/ElectedCardWrapper";
import useCardResultAnimation from "../../../../hooks/useCardResultAnimation";

const ElectedCard: React.FC<ElectedCardProps> = ({ players, index, correctMovie }) => {
    const { id, title, poster_path, imdbRating } = correctMovie;
    const { finish } = useGamePlayContext();
    const { scope } = useCardResultAnimation(finish, getCorrectPlayers(players, index, id));
    const [focus, setFocus] = useState<boolean>(false);

    return (
        <ElectedCardWrapper above={getAbove(players, index)} below={imdbRating} scope={scope}>
            <Droppable droppableId={index.toString()} setFocus={setFocus}>
                <Card
                    front={getCardFront(players, index)}
                    back={<Img alt={title} src={poster_path} />}
                    isFocus={focus}
                />
            </Droppable>
        </ElectedCardWrapper>
    );
};

export default ElectedCard;