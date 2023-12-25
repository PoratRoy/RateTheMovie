import React from "react";
import style from "./SelectedCards.module.css";
import SelectedCard from "../../singel/SelectedCard";
import Pack from "../../core/Pack";
import Droppable from "../../../dnd/Droppable";
import { PACK_CARDS_NUM } from "../../../../models/constants";
import { useCardsContext } from "../../../../context/CardsContext";
import Draggable from "../../../dnd/Draggable";

const SelectedCards: React.FC = () => {
    const { selectedCards } = useCardsContext();

    return (
        <Pack>
            {[...Array(PACK_CARDS_NUM)].map((_, index) => {
                const movie = selectedCards[index] ? selectedCards[index].movie : undefined;
                return (
                    <Droppable key={index} droppableId={index.toString()}>
                        <Draggable draggableId={movie?.imdbID || ""} movie={movie}>
                            <SelectedCard movie={movie} />
                        </Draggable>
                    </Droppable>
                );
            })}
        </Pack>
    );
};

export default SelectedCards;
//id === index.toString() ? movie : undefined
