import React from "react";
import style from "./GameLayout.module.css";
import { useGamePlayContext } from "../../../context/GamePlayContext";
import useFinishAnimation from "../../../hooks/animation/useFinishAnimation";
import Header from "../../../components/common/Header";
import LoadingPage from "../../LoadingPage";
import { GameLayoutProps } from "../../../models/types/props/layout";
import { useSocketContext } from "../../../context/SocketContext";
import GameModal from "./GameModal";
import { useGameStatusContext } from "../../../context/GameStatusContext";
import useWaitingRoom from "../../../hooks/gameplay/useWaitingRoom";
import PreviewPage from "../../PreviewPage";

const GameLayout: React.FC<GameLayoutProps> = ({ children }) => {
    const { game, currentPlayer } = useGamePlayContext();
    const { rivalPlayers, handleStartGame } = useSocketContext();
    const { gameStatus, isPreview, setIsGameStart } = useGameStatusContext();
    const { isWaiting } = useWaitingRoom();
    const { scope } = useFinishAnimation(gameStatus.isPlayerFinishRound);

    const handleClickStartGame = () => {
        if (rivalPlayers.length >= 1) {
            handleStartGame();
            setIsGameStart(true);
        }
    };

    return (
        <React.Fragment>
            {gameStatus.isGameStart ? (
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
                    playerRole={currentPlayer?.role}
                    onClicked={handleClickStartGame}
                    isLoading={isWaiting}
                    game={game}
                />
            )}
        </React.Fragment>
    );
};

export default GameLayout;
