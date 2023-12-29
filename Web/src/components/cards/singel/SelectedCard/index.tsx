import React from "react";
import Card from "../../core/Card";
import { SelectedCardProps } from "../../../../models/types/props";
import Droppable from "../../../dnd/Droppable";
import CardSlice from "../../core/CardSlice";

const SelectedCard: React.FC<SelectedCardProps> = ({ index, players }) => {
    const setPlayers = () => {
        switch (players.length) {
            case 2:
                return (
                    <Card>
                        <CardSlice player={players[0]} side="right" index={index} />
                        <CardSlice player={players[1]} side="left" index={index} />
                    </Card>
                );

            default:
                return (
                    <Card>
                        <CardSlice player={players[0]} side="all" index={index} />
                    </Card>
                );
        }
    };

    return <Droppable droppableId={index.toString()}>{setPlayers()}</Droppable>;
};

export default SelectedCard;
