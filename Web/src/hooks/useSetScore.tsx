import { useGamePlayContext } from "../context/GamePlayContext";
import { Player } from "../models/types/player";
import { movieRating } from "../utils/format";

const useSetScore = () => {
    const { correctOrder, setPlayers } = useGamePlayContext();

    const setScore = () => {
        setPlayers((prev) => {
            return prev.map((player: Player) => {
                let playerScore = 0;
                let rightChoices = [];
                for (let i = 0; i < correctOrder.length; i++) {
                    if (correctOrder[i].movie === player.selectedCards[i]?.movie) {
                        playerScore += movieRating(correctOrder[i]?.movie?.imdbRating);
                        rightChoices.push(correctOrder[i].movie);
                    }
                }
                return {
                    ...player,
                    rightChoices,
                    score: player.score + playerScore,
                };
            });
        });
    };

    return { setScore };
};

export default useSetScore;
