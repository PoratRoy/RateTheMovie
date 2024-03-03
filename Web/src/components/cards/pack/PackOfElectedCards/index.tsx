import React from "react";
import ElectedCard from "../../single/ElectedCard";
import Pack from "../../core/Pack";
import { motion } from "framer-motion";
import { springAnimation } from "../../../../style/animation";
import { Movie } from "../../../../models/types/movie";
import { PackOfElectedCardsProps } from "../../../../models/types/props/pack";

const PackOfElectedCards: React.FC<PackOfElectedCardsProps> = ({
    currentPlayer,
    showCorrectPack,
}) => {
    //TODO: swiching places after fill all the cards triger the animation and not the dnd
    return (
        <Pack>
            {showCorrectPack.map((movie: Movie | undefined, index: number) => {
                if (!movie) movie = currentPlayer.electedCards?.order[index]?.movie;
                return (
                    <motion.span key={movie?.id || index} layout transition={springAnimation}>
                        <ElectedCard index={index} player={currentPlayer} movie={movie} />
                    </motion.span>
                );
            })}
        </Pack>
    );
};
export default PackOfElectedCards;
