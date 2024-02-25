import React from "react";
import ElectedCard from "../../single/ElectedCard";
import Pack from "../../core/Pack";
import { motion } from "framer-motion";
import { springAnimation } from "../../../../style/animation";
import { Movie } from "../../../../models/types/movie";
import { PackOfSelectedCardsProps } from "../../../../models/types/props";

const PackOfSelectedCards: React.FC<PackOfSelectedCardsProps> = ({
    currentPlayer,
    showCorrectPack,
}) => {
    //TODO: swiching places after fill all the cards triger the animation and not the dnd
    return (
        <Pack>
            {showCorrectPack.map((movie: Movie | undefined, index: number) => (
                <motion.span key={movie?.id || index} layout transition={springAnimation}>
                    <ElectedCard
                        index={index}
                        player={currentPlayer}
                        movie={movie}
                    />
                </motion.span>
            ))}
        </Pack>
    );
};
export default PackOfSelectedCards;
