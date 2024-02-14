import React from "react";
import ElectedCard from "../../singel/ElectedCard";
import Pack from "../../core/Pack";
import { useGamePlayContext } from "../../../../context/GamePlayContext";
import { motion } from "framer-motion";
import { springAnimation } from "../../../../style/animation";
import { Movie } from "../../../../models/types/movie";
import { getElectedMovie } from "../../../../utils/movie";

const PackOfSelectedCards: React.FC = () => {
    const { players, finishAnimation } = useGamePlayContext();
    
    //TODO: swiching places after fill all the cards triger the animation and not the dnd
    return (
        <Pack>
            {finishAnimation.showCorrectPack.map((movie: Movie | undefined, index: number) => (
                <motion.span key={movie?.id || index} layout transition={springAnimation}>
                    <ElectedCard
                        index={index}
                        player={players[0]}
                        movie={getElectedMovie(players, movie, index)}
                    />
                </motion.span>
            ))}
        </Pack>
    );
};

export default PackOfSelectedCards;
