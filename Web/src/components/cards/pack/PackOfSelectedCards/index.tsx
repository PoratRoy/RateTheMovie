import React from "react";
import ElectedCard from "../../singel/ElectedCard";
import Pack from "../../core/Pack";
import { useGamePlayContext } from "../../../../context/GamePlayContext";
import { motion } from "framer-motion";
import { springAnimation } from "../../../../style/animation";
import { Movie } from "../../../../models/types/movie";

const PackOfSelectedCards: React.FC = () => {
    const { players, finishAnimation } = useGamePlayContext();
    
    const getElectedMovie = (movie: Movie | undefined, index: number) => {
        if (movie) return movie;

        const cards = players[0].electedCards[index];
        return cards?.movie;
    };

    //TODO: swiching places after fill all the cards triger the animation and not the dnd
    return (
        <Pack>
            {finishAnimation.showCorrectPack.map((movie: Movie | undefined, index: number) => (
                <motion.span key={movie?.id || index} layout transition={springAnimation}>
                    <ElectedCard
                        index={index}
                        player={players[0]}
                        movie={getElectedMovie(movie, index)}
                    />
                </motion.span>
            ))}
        </Pack>
    );
};

export default PackOfSelectedCards;
