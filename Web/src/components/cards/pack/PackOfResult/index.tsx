import React from "react";
import Pack from "../../core/Pack";
import { PackOfResultProps } from "../../../../models/types/props/pack";
import ResultCard from "../../single/ResultCard";
import { Card } from "../../../../models/types/card";

const PackOfResult: React.FC<PackOfResultProps> = ({ revealCards, currentPlayer }) => {
    return (
        <Pack packDisplay="small">
            {currentPlayer &&
                revealCards.map((card: Card | undefined, index: number) => {
                    return (
                        <ResultCard
                            key={index}
                            player={currentPlayer}
                            card={card}
                            index={index}
                            showRate
                        />
                    );
                })}
        </Pack>
    );
};

export default PackOfResult;
