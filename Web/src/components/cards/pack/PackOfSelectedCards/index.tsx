import React, { useEffect } from "react";
import ElectedCard from "../../singel/ElectedCard";
import Pack from "../../core/Pack";
import { useGamePlayContext } from "../../../../context/GamePlayContext";
import { motion } from "framer-motion";
import { springAnimation } from "../../../../style/animation";
import { isFinishPlacingElectedCards } from "../../../../utils/finish";
import { useMovieContext } from "../../../../context/MovieContext";
import { findMovieById } from "../../../../utils/movie";

const PackOfSelectedCards: React.FC = () => {
    const { players, finish, finishAnimation, setCorrectPack } = useGamePlayContext();
    const { movies } = useMovieContext();

    useEffect(() => {
        if (!finish) {
            const selectedCards = isFinishPlacingElectedCards(players);
            if (selectedCards) {
                setCorrectPack(selectedCards);
            }
        }
    }, [players]);
    //TODO: swiching places after fill all the cards triger the animation and not the dnd
    return (
        <Pack>
            {finishAnimation.showCorrectPack.map((movieId: string, index: number) => (
                <motion.span key={movieId || index} layout transition={springAnimation}>
                    <ElectedCard
                        index={index}
                        player={players[0]}
                        movie={findMovieById(movieId, movies)}
                    />
                </motion.span>
            ))}
        </Pack>
    );
};

export default PackOfSelectedCards;
