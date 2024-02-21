import { useGamePlayContext } from "../context/GamePlayContext";
import { Player } from "../models/types/player";
import { handlePlayerScore } from "../utils/correctOrder";

const useSetScore = () => {
    const { setPlayers } = useGamePlayContext();

    const setScore = () => {
        setPlayers((prev) => {
            return prev.map((player: Player) => {
                const playerScore = handlePlayerScore(player);
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
