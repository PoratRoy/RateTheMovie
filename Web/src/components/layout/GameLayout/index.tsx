import React from "react";
import { GameLayoutProps } from "../../../models/types/props";
import Logo from "../../common/Logo";
import style from "./GameLayout.module.css";
import Footer from "../../common/Footer";
import Score from "../../actions/Score";
import ShuffleBtn from "../../actions/btn/ShuffleBtn";
import path from "../../../router/routePath.json";
import { useGamePlayContext } from "../../../context/GamePlayContext";
import useFinishAnimation from "../../../hooks/useFinishAnimation";

const GameLayout: React.FC<GameLayoutProps> = ({ children }) => {
    const { finish } = useGamePlayContext();
    const { scope } = useFinishAnimation(finish);

    return (
        <section className={style.gmaeContainer}>
            <section className={style.gmaeHeaderContainer}>
                {/* TODO: move to header component */}
                <Score score={124.3} />
                <Logo size="small" />
                <ShuffleBtn />
            </section>
            <section ref={scope} className={style.gameChildrenContainer}>
                {children}
            </section>
            <Footer link={path.land} />
        </section>
    );
};

export default GameLayout;
