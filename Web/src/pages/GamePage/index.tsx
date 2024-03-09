import React from "react";
import { useGamePlayContext } from "../../context/GamePlayContext";
import PlayerLayout from "../../components/layout/PlayerLayout";
import GameLayout from "../layout/GameLayout";
import ElectedPackLayout from "../../components/layout/ElectedPackLayout";
import useCheckMoviesAlreadySet from "../../api/hooks/useCheckMoviesAlreadySet";
import CountDown from "../../components/actions/animation/CountDown";
import { START_TIMER } from "../../models/constant";
import useStartGame from "../../hooks/gameplay/useStartGame";

const GamePage: React.FC = () => {
    useCheckMoviesAlreadySet();
    const { currentPlayer } = useGamePlayContext();
    const { cardLoading, showTimer, closeTimer } = useStartGame();
    
    return (
        <GameLayout activateTimer={cardLoading ? false : true}>
            <ElectedPackLayout />
            {currentPlayer ? (
                <PlayerLayout cardLoading={cardLoading} player={currentPlayer} />
            ) : null}
            {showTimer ? <CountDown time={START_TIMER} closeTimer={closeTimer} /> : null}
        </GameLayout>
    );
};

export default GamePage;
