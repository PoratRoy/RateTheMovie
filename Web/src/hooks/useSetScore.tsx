import { useGamePlayContext } from "../context/GamePlayContext";
import { Player } from "../models/types/player";

const useSetScore = () => {
    const { correctOrder, setPlayers } = useGamePlayContext();

    const setScore = () => {
        setPlayers((prev) => {
            return prev.map((player: Player) => {
                let playerScore = 0;
                for (let i = 0; i < correctOrder.length; i++) {
                    if (correctOrder[i].movie === player.selectedCards[i]?.movie) {
                        playerScore += parseFloat(correctOrder[i]?.movie?.imdbRating || "0");
                    }
                }
                return {
                    ...player,
                    score: player.score + playerScore,
                };
            });
        });
    };

    return { setScore };
};

export default useSetScore;
