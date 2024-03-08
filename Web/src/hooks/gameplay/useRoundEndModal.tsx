import { useMemo } from "react";
import { useGamePlayContext } from "../../context/GamePlayContext";

const useRoundEndModal = () => {
    const { game } = useGamePlayContext();
    const gameOver = useMemo(() => game?.currentRound === game?.rounds, [game]);
    const title = useMemo(
        () => (gameOver ? "GAME OVER" : `ROUND ${game?.currentRound || 1}`),
        [game, gameOver],
    );

    return { title, gameOver };
};

export default useRoundEndModal;
