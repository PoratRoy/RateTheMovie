import React from "react";
import ElectedCard from "../../single/ElectedCard";
import Pack from "../../core/Pack";
import { PackOfElectedCardsProps } from "../../../../models/types/props/pack";
import { Card } from "../../../../models/types/card";

const PackOfElectedCards: React.FC<PackOfElectedCardsProps> = ({
    currentPlayer,
    showCorrectPack,
}) => {
    return (
        <Pack>
            {showCorrectPack.map((card: Card | undefined, index: number) => {
                return (
                    <React.Fragment key={index}>
                        <ElectedCard index={index} player={currentPlayer} card={card} />
                    </React.Fragment>
                );
            })}
        </Pack>
    );
};
export default PackOfElectedCards;
