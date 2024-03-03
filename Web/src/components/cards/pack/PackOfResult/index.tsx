import React from "react";
import Pack from "../../core/Pack";
import { Movie } from "../../../../models/types/movie";
import { PackOfResultProps } from "../../../../models/types/props/pack";
import { motion } from "framer-motion";
import { springAnimation } from "../../../../style/animation";
import ResultCard from "../../single/ResultCard";

const PackOfResult: React.FC<PackOfResultProps> = ({ revealCards, currentPlayer }) => {
    return (
        <Pack packDisplay="small">
            {currentPlayer &&
                revealCards.map((movie: Movie | undefined, index: number) => {
                    if (!movie) movie = currentPlayer.electedCards?.order[index]?.movie;
                    return (
                        <motion.span key={movie?.id || index} layout transition={springAnimation}>
                            <ResultCard currentPlayer={currentPlayer} movie={movie} index={index} />
                        </motion.span>
                    );
                })}
        </Pack>
    );
};

export default PackOfResult;
