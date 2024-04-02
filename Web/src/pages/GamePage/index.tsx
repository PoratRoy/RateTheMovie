import React from "react";
import { useGamePlayContext } from "../../context/GamePlayContext";
import PlayerLayout from "../../components/layout/PlayerLayout";
import GameLayout from "../layout/GameLayout";
import ElectedPackLayout from "../../components/layout/ElectedPackLayout";
import useCheckMoviesAlreadySet from "../../api/hooks/useCheckMoviesAlreadySet";
import CountDown from "../../components/actions/animation/CountDown";
import { START_TIMER } from "../../models/constant";
import useGameTimer from "../../hooks/gameplay/useGameTimer";
import SomethingWentWrong from "../../components/error/SomethingWentWrong";

const GamePage: React.FC = () => {
    useCheckMoviesAlreadySet();
    const { currentPlayer } = useGamePlayContext();
    const { showTimer, closeTimer } = useGameTimer();

    return (
        <GameLayout>
            {currentPlayer ? (
                <React.Fragment>
                    <ElectedPackLayout currentPlayer={currentPlayer} />
                    <PlayerLayout player={currentPlayer} />
                    {showTimer ? <CountDown time={START_TIMER} closeTimer={closeTimer} /> : null}
                </React.Fragment>
            ) : (
                <SomethingWentWrong />
            )}
        </GameLayout>
    );
};

export default GamePage;
