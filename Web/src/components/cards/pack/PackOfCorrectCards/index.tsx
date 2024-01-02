import React from "react";
import CorrectCard from "../../singel/CorrectCard";
import Pack from "../../core/Pack";
import { useGamePlayContext } from "../../../../context/GamePlayContext";
import { Card } from "../../../../models/types/card";


const PackOfCorrectCards: React.FC = () => {
    const { correctOrder } = useGamePlayContext();
    return (
        <Pack>
            {correctOrder.map((card: Card, i: number) => (
                <CorrectCard key={i} movie={card.movie} />
            ))}
        </Pack>
    );
};

export default PackOfCorrectCards;
