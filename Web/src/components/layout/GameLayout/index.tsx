import React from "react";
import { GameLayoutProps } from "../../../models/types/props";
import Logo from "../../common/Logo";
import style from "./GameLayout.module.css";

const GameLayout: React.FC<GameLayoutProps> = ({ children }) => {
    return (
        <section className={style.gmaeContainer}>
            <Logo width={150} />
            <section className={style.gmaeChildrenContainer}>{children}</section>
            <footer className={style.gmaeFotter}>
                Made By{" "}
                <a
                    className={style.gmaeFotterLink}
                    href="https://github.com/PoratRoy"
                    target="_blank"
                >
                    Roy Porat
                </a>
            </footer>
        </section>
    );
};

export default GameLayout;
