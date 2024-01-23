import React from "react";
import { GameLayoutProps } from "../../../models/types/props";
import style from "./GameLayout.module.css";
import Footer from "../../common/Footer";
import path from "../../../router/routePath.json";
import { useGamePlayContext } from "../../../context/GamePlayContext";
import useFinishAnimation from "../../../hooks/useFinishAnimation";
import Header from "../../common/Header";

const GameLayout: React.FC<GameLayoutProps> = ({ children }) => {
    const { finish } = useGamePlayContext();
    const { scope } = useFinishAnimation(finish);

    return (
        <section className={style.gameContainer}>
            <Header />
            <section ref={scope} className={style.gameChildrenContainer}>
                {children}
            </section>
            <Footer link={path.land} />
        </section>
    );
};

export default GameLayout;
