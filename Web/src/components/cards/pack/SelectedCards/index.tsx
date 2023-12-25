import React from "react";
import style from "./SelectedCards.module.css";
import SelectedCard from "../../singel/SelectedCard";
import Pack from "../../core/Pack";
import Droppable from "../../../dnd/Droppable";
import { SelectedCardsProps } from "../../../../models/types/props";
import { PACK_CARDS_NUM } from "../../../../models/constants";

const SelectedCards: React.FC<SelectedCardsProps> = ({ terget }) => {
    const { id, movie } = terget;
    return (
        <Pack>
            {[...Array(PACK_CARDS_NUM)].map((_, index) => (
                <Droppable key={index} droppableId={index.toString()}>
                    <SelectedCard movie={id === index.toString() ? movie : undefined} />
                </Droppable>
            ))}
        </Pack>
    );
};

export default SelectedCards;
