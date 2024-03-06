import React, { useEffect } from "react";
import style from "./GameLayout.module.css";
import { useGamePlayContext } from "../../../context/GamePlayContext";
import useFinishAnimation from "../../../hooks/animation/useFinishAnimation";
import Header from "../../../components/common/Header";
import LoadingPage from "../../LoadingPage";
import { GameLayoutProps } from "../../../models/types/props/layout";
import { ModOption } from "../../../models/enums/landing";
import { useSocketContext } from "../../../context/SocketContext";
import useStartGame from "../../../hooks/gameplay/useStartGame";
import RoundEndModal from "../../../components/view/modals/RoundEndModal";
import useShowModal from "../../../hooks/global/useShowModal";
import { useAnimationContext } from "../../../context/AnimationContext";

const GameLayout: React.FC<GameLayoutProps> = ({ children }) => {
    const { finishAnimation, setNextRound } = useAnimationContext();
    const { showModal, handleOpen, handleClose } = useShowModal(() => setNextRound(false));
    const { finishRound, game, currentPlayer } = useGamePlayContext();
    const { rivalPlayers, startGame, handleStartGame } = useSocketContext();
    const { scope } = useFinishAnimation(finishRound);
    const { isLoading } = useStartGame();
    const { nextRound } = finishAnimation;

    const handleClickStartGame = () => {
        if (rivalPlayers.length >= 1) {
            handleStartGame();
        }
    };

    useEffect(() => {
        if (nextRound) handleOpen();
    }, [nextRound]);

    return (
        <React.Fragment>
            {startGame ? (
                <section className={style.gameContainer}>
                    <Header />
                    <section ref={scope} className={style.gameChildrenContainer}>
                        {children}
                    </section>
                    {showModal ? <RoundEndModal close={handleClose} /> : null}
                </section>
            ) : (
                <LoadingPage
                    rivalPlayers={rivalPlayers}
                    playerRole={currentPlayer?.role}
                    onClicked={handleClickStartGame}
                    isLoading={isLoading}
                    gameMod={game?.mod || ModOption.MULTI}
                />
            )}
        </React.Fragment>
    );
};

export default GameLayout;
