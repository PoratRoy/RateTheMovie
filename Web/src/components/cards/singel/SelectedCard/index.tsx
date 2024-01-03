import React, { useEffect, useState } from "react";
import Card from "../../core/Card";
import { SelectedCardProps } from "../../../../models/types/props";
import Droppable from "../../../dnd/Droppable";
import CardSlice from "../../core/CardSlice";
import ShadowOptionCard from "../ShadowOptionCard";
import { useGamePlayContext } from "../../../../context/GamePlayContext";

const SelectedCard: React.FC<SelectedCardProps> = ({ index, players }) => {
    const { finish } = useGamePlayContext();
    const [focus, setFocus] = useState<boolean>(false);

    useEffect(() => {
        if (finish) {
        }
    }, [finish]);

    const setPlayers = () => {
        switch (players.length) {
            case 2:
                return (
                    <Card isFocus={focus}>
                        <CardSlice player={players[0]} side="right" index={index} />
                        <CardSlice player={players[1]} side="left" index={index} />
                    </Card>
                );

            case 1:
                return (
                    <Card isFocus={focus}>
                        <CardSlice player={players[0]} side="all" index={index} />
                    </Card>
                );
        }
    };

    return (
        <Droppable droppableId={index.toString()} setFocus={setFocus}>
            {setPlayers()}
        </Droppable>
    );
};

export default SelectedCard;

//<ShadowOptionCard movie={players[0].selectedCards[index]?.movie} />
