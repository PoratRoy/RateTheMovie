import { useGamePlayContext } from "../../context/GamePlayContext";
import { Player } from "../../models/types/player";
import { handlePlayerScore } from "../../utils/correctOrder";

const useSetScore = () => {
    const { setCurrentPlayer } = useGamePlayContext();

    const setScore = () => {
        setCurrentPlayer((player: Player | undefined) => {
            if (!player) return player;
            const playerScore = handlePlayerScore(player);
            return {
                ...player,
                score: player.score + playerScore,
            };
        });
    };

    return { setScore };
};

export default useSetScore;
