import React from "react";
import { useGamePlayContext } from "../../context/GamePlayContext";
import PlayerLayout from "../../components/layout/PlayerLayout";
import GameLayout from "../layout/GameLayout";
import ElectedPackLayout from "../../components/layout/ElectedPackLayout";
import useCheckMoviesAlreadySet from "../../api/hooks/useCheckMoviesAlreadySet";

const GamePage: React.FC = () => {
    useCheckMoviesAlreadySet();
    const { currentPlayer } = useGamePlayContext();

    return (
        <GameLayout>
            <ElectedPackLayout />
            {currentPlayer ? <PlayerLayout player={currentPlayer} /> : null}
        </GameLayout>
    );
};

export default GamePage;
