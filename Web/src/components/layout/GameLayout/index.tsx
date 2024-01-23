import React from "react";
import { GameLayoutProps } from "../../../models/types/props";
import Logo from "../../common/Logo";
import style from "./GameLayout.module.css";
import Footer from "../../common/Footer";
import Score from "../../actions/Score";
import ShuffleBtn from "../../actions/btn/ShuffleBtn";
import path from "../../../router/routePath.json";

const GameLayout: React.FC<GameLayoutProps> = ({ children }) => {
    return (
        <section className={style.gmaeContainer}>
            <section className={style.gmaeHeaderContainer}>
                <Score score={124.3} />
                <Logo size="small" />
                <ShuffleBtn />
            </section>
            <section className={style.gameChildrenContainer}>{children}</section>
            <Footer link={path.land} />
        </section>
    );
};

export default GameLayout;
