import React from "react";
import style from "./SelectedCards.module.css";
import SelectedCard from "../../singel/SelectedCard";
import Pack from "../../core/Pack";
import Droppable from "../../../dnd/Droppable";
import { SelectedCardsProps } from "../../../../models/types/props";

const SelectedCards: React.FC<SelectedCardsProps> = ({ terget }) => {
    const { id, movie } = terget;
    return (
        <Pack>
            <Droppable key={1} droppableId={"1"}>
                <SelectedCard movie={id === "1" ? movie : undefined} />
            </Droppable>
            <Droppable key={2} droppableId={"2"}>
                <SelectedCard movie={id === "2" ? movie : undefined} />
            </Droppable>
            <Droppable key={3} droppableId={"3"}>
                <SelectedCard movie={id === "3" ? movie : undefined} />
            </Droppable>
        </Pack>
    );
};

export default SelectedCards;
