import React, { useEffect, useState } from "react";
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

const GameLayout: React.FC<GameLayoutProps> = ({ children }) => {
    const [showPauseModal, setShowPauseModal] = useState<boolean>(false);
    const { finish, game, currentPlayer, finishAnimation } = useGamePlayContext();
    const { rivalPlayers, startGame, handleStartGame } = useSocketContext();
    const { scope } = useFinishAnimation(finish);
    const { isLoading } = useStartGame();
    const { nextRound } = finishAnimation;

    const handleClickStartGame = () => {
        if (rivalPlayers.length >= 1) {
            handleStartGame();
        }
    };

    useEffect(() => {
        if (nextRound) {
            setShowPauseModal(true);
        }
    }, [nextRound]);

    return (
        <React.Fragment>
            {startGame ? (
                <section className={style.gameContainer}>
                    <Header />
                    <section ref={scope} className={style.gameChildrenContainer}>
                        {children}
                    </section>
                    {showPauseModal ? (
                        <RoundEndModal close={() => setShowPauseModal(false)} />
                    ) : null}
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
