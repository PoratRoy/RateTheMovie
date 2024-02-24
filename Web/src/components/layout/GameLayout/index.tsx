import React, { useEffect, useRef, useState } from "react";
import { GameLayoutProps } from "../../../models/types/props";
import style from "./GameLayout.module.css";
import Footer from "../../common/Footer";
import path from "../../../router/routePath.json";
import { useGamePlayContext } from "../../../context/GamePlayContext";
import useFinishAnimation from "../../../hooks/animation/useFinishAnimation";
import Header from "../../common/Header";
import LoadingPage from "../../../pages/LoadingPage";

const GameLayout: React.FC<GameLayoutProps> = ({ children }) => {
    const { finish, fetchLoading } = useGamePlayContext();
    const { scope } = useFinishAnimation(finish);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const isLoadingRef = useRef<boolean>(true);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            if (isLoadingRef.current === false) {
                setIsLoading(false);
            }
        }, 3000);

        return () => clearTimeout(timeoutId);
    }, [isLoadingRef.current]);

    useEffect(() => {
        isLoadingRef.current = fetchLoading;
    }, [fetchLoading]);

    return (
        <React.Fragment>
            {isLoading ? (
                <LoadingPage />
            ) : (
                <section className={style.gameContainer}>
                    <Header />
                    <section ref={scope} className={style.gameChildrenContainer}>
                        {children}
                    </section>
                    <Footer link={path.land} />
                </section>
            )}
        </React.Fragment>
    );
};

export default GameLayout;
