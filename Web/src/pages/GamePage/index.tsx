import React from "react";
import { useGamePlayContext } from "../../context/GamePlayContext";
import PlayerLayout from "../../components/layout/PlayerLayout";
import GameLayout from "../layout/GameLayout";
import ElectedPackLayout from "../../components/layout/ElectedPackLayout";
import useCheckMoviesAlreadySet from "../../api/hooks/useCheckMoviesAlreadySet";
import CountDown from "../../components/actions/animation/CountDown";
import { START_TIMER } from "../../models/constant/time";
import useGameTimer from "../../hooks/time/useGameTimer";
import SomethingWentWrong from "../../components/error/SomethingWentWrong";
import useReload from "../../hooks/global/useReload";
import { useAnimationContext } from "../../context/AnimationContext";

const GamePage: React.FC = () => {
    useCheckMoviesAlreadySet();
    const { currentPlayer, gameCards, setIsPlayerFinishRound } = useGamePlayContext();
    const { activateFinishAnimation } = useAnimationContext();
    const { showTimer, closeTimer } = useGameTimer();

    const handleBeforeUnload = (event: any) => {
        if (activateFinishAnimation) setIsPlayerFinishRound(true);
        const message = "Are you sure you want to leave?";
        return (event.returnValue = message);
    };

    useReload(handleBeforeUnload, [activateFinishAnimation]);

    return (
        <GameLayout>
            {currentPlayer && gameCards ? (
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
