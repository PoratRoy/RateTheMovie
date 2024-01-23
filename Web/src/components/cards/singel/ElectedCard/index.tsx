import React, { useState } from "react";
import { ElectedCardProps } from "../../../../models/types/props";
import Droppable from "../../../dnd/Droppable";
import Card from "../../core/Card";
import { getCardFront } from "../../../../utils/card";
import { placeholderCardType } from "../../../../models/types/card";
import ElectedCardWrapper from "../../wrapper/ElectedCardWrapper";
import { useGamePlayContext } from "../../../../context/GamePlayContext";
import useFinishAnimation from "../../../../hooks/useFinishAnimation";

const ElectedCard: React.FC<ElectedCardProps> = ({ players, index, correctMovie }) => {
    const { imdbRating } = correctMovie;
    const [focus, setFocus] = useState<boolean>(false);
    const { finish } = useGamePlayContext();
    const { scope } = useFinishAnimation(finish);

    return (
        <ElectedCardWrapper rate={imdbRating} scope={scope}>
            <Droppable droppableId={index.toString()} setFocus={setFocus}>
                <Card
                    type={{ t: "Elected", index } as placeholderCardType}
                    front={getCardFront(players, index)}
                    size="small"
                    isFocus={focus}
                />
            </Droppable>
        </ElectedCardWrapper>
    );
};

export default ElectedCard;
