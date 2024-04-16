import React from "react";
import style from "./GameLayout.module.css";
import { useGamePlayContext } from "../../../context/GamePlayContext";
import useFinishAnimation from "../../../hooks/animation/useFinishAnimation";
import Header from "../../../components/common/Header";
import LoadingPage from "../../LoadingPage";
import { GameLayoutProps } from "../../../models/types/props/layout";
import { useSocketContext } from "../../../context/SocketContext";
import GameModal from "./GameModal";
import useWaitingRoom from "../../../hooks/multiplayer/useWaitingRoom";
import PreviewPage from "../../PreviewPage";
import { useAnimationContext } from "../../../context/AnimationContext";

const GameLayout: React.FC<GameLayoutProps> = ({ children }) => {
    const { game, currentPlayer, isPreview, setIsGameStart, setIsRoundStart } =
        useGamePlayContext();
    const { rivalPlayers, handleStartGame } = useSocketContext();
    const { activateFinishAnimation } = useAnimationContext();
    const { isWaiting } = useWaitingRoom();
    const { scope } = useFinishAnimation(activateFinishAnimation);

    const handleClickStartGame = () => {
        if (rivalPlayers && rivalPlayers.length >= 1) {
            handleStartGame();
            setIsGameStart(true);
            setIsRoundStart(true);
        }
    };

    return game?.isGameStart ? (
        <React.Fragment>
            {isPreview ? (
                <PreviewPage />
            ) : (
                <section className={style.gameContainer}>
                    <Header />
                    <section ref={scope} className={style.gameChildrenContainer}>
                        {children}
                    </section>
                    <GameModal />
                </section>
            )}
        </React.Fragment>
    ) : (
        <LoadingPage
            rivalPlayers={rivalPlayers}
            currentPlayer={currentPlayer}
            onClicked={handleClickStartGame}
            isLoading={isWaiting}
            game={game}
        />
    );
};

export default GameLayout;
