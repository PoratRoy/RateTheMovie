import React from "react";
import style from "./SelectedCards.module.css";
import SelectedCard from "../../singel/SelectedCard";
import Pack from "../../core/Pack";

const SelectedCards: React.FC = () => {
    return (
        <Pack>
            <SelectedCard />
            <SelectedCard />
            <SelectedCard />
        </Pack>
    );
};

export default SelectedCards;
