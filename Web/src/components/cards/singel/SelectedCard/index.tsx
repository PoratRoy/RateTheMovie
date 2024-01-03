import React, { useEffect, useState } from "react";
import Card from "../../core/Card";
import { SelectedCardProps } from "../../../../models/types/props";
import Droppable from "../../../dnd/Droppable";
import CardSlice from "../../core/CardSlice";
import { useGamePlayContext } from "../../../../context/GamePlayContext";
import Img from "../../core/Img";

const SelectedCard: React.FC<SelectedCardProps> = ({ index, players, correctMovie }) => {
    const { finish } = useGamePlayContext();
    const [focus, setFocus] = useState<boolean>(false);
    const { title, poster_path } = correctMovie;

    useEffect(() => {
        if (finish) {
        }
    }, [finish]);

    const setPlayers = () => {
        switch (players.length) {
            case 2:
                return (
                    <React.Fragment>
                        <CardSlice player={players[0]} side="right" index={index} />
                        <CardSlice player={players[1]} side="left" index={index} />
                    </React.Fragment>
                );

            case 1:
                return (
                    <React.Fragment>
                        <CardSlice player={players[0]} side="all" index={index} />
                    </React.Fragment>
                );
        }
    };

    return (
        <Droppable droppableId={index.toString()} setFocus={setFocus}>
            <Card
                flip={finish}
                isFocus={focus}
                back={<Img alt={title} src={poster_path} />}
                front={setPlayers()}
            />
        </Droppable>
    );
};

export default SelectedCard;

//<ShadowOptionCard movie={players[0].selectedCards[index]?.movie} />
