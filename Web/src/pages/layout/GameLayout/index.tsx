import React, { useEffect, useRef, useState } from "react";
import style from "./GameLayout.module.css";
import { useGamePlayContext } from "../../../context/GamePlayContext";
import useFinishAnimation from "../../../hooks/animation/useFinishAnimation";
import Header from "../../../components/common/Header";
import LoadingPage from "../../LoadingPage";
import { GameLayoutProps } from "../../../models/types/props/layout";
import { ModOption } from "../../../models/enums/landing";
import { useSocketContext } from "../../../context/SocketContext";

const GameLayout: React.FC<GameLayoutProps> = ({ children }) => {
    const { finish, fetchLoading, gameCards, game, currentPlayer } = useGamePlayContext();
    const { rivalPlayers } = useSocketContext();
    const { scope } = useFinishAnimation(finish);
    const [isGame, setIsGame] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const isGameRef = useRef<boolean>(true);

    useEffect(() => {
        if (game?.mod === ModOption.MULTI && currentPlayer?.role === "host") {
            if (
                rivalPlayers.length >= 1 &&
                fetchLoading === false &&
                gameCards[0].id !== undefined
            ) {
                setIsLoading(rivalPlayers.length === 0 ? true : false);
            }
        }
    }, [rivalPlayers, fetchLoading, gameCards]);

    useEffect(() => {
        if (game?.mod === ModOption.SINGLE) {
            if (gameCards[0].id === undefined) {
                const timeoutId = setTimeout(() => {
                    if (isGameRef.current === false) {
                        setIsGame(true);
                    }
                }, 3000);
                return () => clearTimeout(timeoutId);
            } else {
                setIsGame(true);
            }
        }
    }, [isGameRef.current]);

    useEffect(() => {
        isGameRef.current = fetchLoading;
    }, [fetchLoading]);

    const handleClickStartGame = () => {
        if (rivalPlayers.length > 1) {
            setIsGame(true);
        }
    };

    return (
        <React.Fragment>
            {isGame ? (
                <section className={style.gameContainer}>
                    <Header />
                    <section ref={scope} className={style.gameChildrenContainer}>
                        {children}
                    </section>
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
