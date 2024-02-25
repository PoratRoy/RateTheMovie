import React, { useEffect, useRef, useState } from "react";
import style from "./GameLayout.module.css";
import { useGamePlayContext } from "../../../context/GamePlayContext";
import useFinishAnimation from "../../../hooks/animation/useFinishAnimation";
import Header from "../../../components/common/Header";
import LoadingPage from "../../LoadingPage";
import { GameLayoutProps } from "../../../models/types/props/layout";

const GameLayout: React.FC<GameLayoutProps> = ({ children }) => {
    const { finish, fetchLoading, gameCards } = useGamePlayContext();
    const { scope } = useFinishAnimation(finish);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [isCanStart, setIsCanStart] = useState<boolean>(false);
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

    // useEffect(() => {
    //     if(setupOption.option === ModOption.MULTI){
    //         if (players.length > 0) setLoading(false);
    //     }
    // }, [players]);

    return (
        <React.Fragment>
            {isLoading ? (
                <LoadingPage isCanStart={isCanStart}/>
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
