import React from "react";
import { GameLayoutProps } from "../../../models/types/props";
import Logo from "../../common/Logo";
import style from "./GameLayout.module.css";
import Footer from "../../common/Footer";
//TODO: link to help page
const GameLayout: React.FC<GameLayoutProps> = ({ children }) => {
    return (
        <section className={style.gmaeContainer}>
            <Logo size="small" />
            <section className={style.gmaeChildrenContainer}>{children}</section>
            <Footer />
        </section>
    );
};

export default GameLayout;
