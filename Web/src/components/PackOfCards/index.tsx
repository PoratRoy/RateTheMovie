import React from "react";
import style from "./PackOfCards.module.css";
import MyCard from "../MyCard";

const PackOfCards: React.FC = () => {
    return <section>
        <MyCard/>
        <MyCard/>
        <MyCard/>
    </section>;
};

export default PackOfCards;
