import React from "react";
import style from "./GameLayout.module.css";
import { useGamePlayContext } from "../../../context/GamePlayContext";
import useFinishAnimation from "../../../hooks/animation/useFinishAnimation";
import Header from "../../../components/common/Header";
import LoadingPage from "../../LoadingPage";
import { GameLayoutProps } from "../../../models/types/props/layout";
import { useSocketContext } from "../../../context/SocketContext";
import GameModal from "./GameModal";

const GameLayout: React.FC<GameLayoutProps> = ({ children, activateTimer, isLoading }) => {
    const { playerFinishRound, game, currentPlayer } = useGamePlayContext();
    const { rivalPlayers, startGame, handleStartGame } = useSocketContext();
    const { scope } = useFinishAnimation(playerFinishRound);

    const handleClickStartGame = () => {
        if (rivalPlayers.length >= 1) {
            handleStartGame();
        }
    };

    return (
        <React.Fragment>
            {startGame ? (
                <section className={style.gameContainer}>
                    <Header activateTimer={activateTimer} />
                    <section ref={scope} className={style.gameChildrenContainer}>
                        {children}
                    </section>
                    <GameModal />
                </section>
            ) : (
                <LoadingPage
                    rivalPlayers={rivalPlayers}
                    playerRole={currentPlayer?.role}
                    onClicked={handleClickStartGame}
                    isLoading={isLoading}
                    game={game}
                />
            )}
        </React.Fragment>
    );
};

export default GameLayout;
