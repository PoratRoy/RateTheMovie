import React from "react";
import RightCard from "../../singel/RightCard";
import Pack from "../../core/Pack";
import { useGamePlayContext } from "../../../../context/GamePlayContext";
import { Card } from "../../../../models/types/card";


const PackOfRightCards: React.FC = () => {
    const { correctOrder } = useGamePlayContext();
    return (
        <Pack>
            {correctOrder.map((card: Card, i: number) => (
                <RightCard key={i} movie={card.movie} />
            ))}
        </Pack>
    );
};

export default PackOfRightCards;
