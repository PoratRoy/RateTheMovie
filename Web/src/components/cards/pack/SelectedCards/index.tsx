import React from "react";
import style from "./SelectedCards.module.css";
import SelectedCard from "../../singel/SelectedCard";
import Pack from "../../core/Pack";
import { PACK_CARDS_NUM } from "../../../../models/constants";
import { useCardsContext } from "../../../../context/CardsContext";

const SelectedCards: React.FC = () => {
    const { selectedCards } = useCardsContext();

    return (
        <Pack>
            {[...Array(PACK_CARDS_NUM)].map((_, index) => {
                const movie = selectedCards[index] ? selectedCards[index].movie : undefined;
                return <SelectedCard movie={movie} index={index.toString()} />;
            })}
        </Pack>
    );
};

export default SelectedCards;
