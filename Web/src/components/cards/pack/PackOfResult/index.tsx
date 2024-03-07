import React from "react";
import Pack from "../../core/Pack";
import { PackOfResultProps } from "../../../../models/types/props/pack";
import { motion } from "framer-motion";
import { springAnimation } from "../../../../style/animation";
import ResultCard from "../../single/ResultCard";
import { Card } from "../../../../models/types/card";

const PackOfResult: React.FC<PackOfResultProps> = ({ revealCards, currentPlayer }) => {
    return (
        <Pack packDisplay="small">
            {currentPlayer &&
                revealCards.map((card: Card | undefined, index: number) => {
                    return (
                        <motion.span key={card?.movie.id || index} layout transition={springAnimation}>
                            <ResultCard currentPlayer={currentPlayer} card={card} index={index} />
                        </motion.span>
                    );
                })}
        </Pack>
    );
};

export default PackOfResult;
