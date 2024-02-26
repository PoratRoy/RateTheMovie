import React, { useEffect, useRef, useState } from "react";
import style from "./GameLayout.module.css";
import { useGamePlayContext } from "../../../context/GamePlayContext";
import useFinishAnimation from "../../../hooks/animation/useFinishAnimation";
import Header from "../../../components/common/Header";
import LoadingPage from "../../LoadingPage";
import { GameLayoutProps } from "../../../models/types/props/layout";
import { ModOption } from "../../../models/enums/landing";

const GameLayout: React.FC<GameLayoutProps> = ({ children }) => {
    const { finish, fetchLoading, gameCards, game } = useGamePlayContext();
    const { scope } = useFinishAnimation(finish);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [canStart, setCanStart] = useState<boolean>(false);
    const isLoadingRef = useRef<boolean>(true);

    useEffect(() => {
        if (gameCards[0].id === undefined) {
            const timeoutId = setTimeout(() => {
                if (isLoadingRef.current === false) {
                    setIsLoading(false);
                }
            }, 3000);
            return () => clearTimeout(timeoutId);
        } else {
            setIsLoading(false);
        }
    }, [isLoadingRef.current]);

    useEffect(() => {
        isLoadingRef.current = fetchLoading;
    }, [fetchLoading]);

    useEffect(() => {
        if (game && game.mod === ModOption.MULTI) {
            // if (players.length > 0) setCanStart(true);
        } else {
            // setCanStart(true);
        }
    }, []);

    return (
        <React.Fragment>
            {isLoading ? (
                <LoadingPage canStart={canStart} />
            ) : (
                <section className={style.gameContainer}>
                    <Header />
                    <section ref={scope} className={style.gameChildrenContainer}>
                        {children}
                    </section>
                </section>
            )}
        </React.Fragment>
    );
};

export default GameLayout;
