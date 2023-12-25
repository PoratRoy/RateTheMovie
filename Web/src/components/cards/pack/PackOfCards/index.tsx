import React from "react";
import style from "./PackOfCards.module.css";
import MyCard from "../../singel/MyCard";
import Pack from "../../core/Pack";

const PackOfCards: React.FC = () => {
    return (
        <Pack>
            <MyCard />
            <MyCard />
            <MyCard />
        </Pack>
    );
};

export default PackOfCards;
