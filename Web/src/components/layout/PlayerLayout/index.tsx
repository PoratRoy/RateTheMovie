import React from "react";
import PackOfCards from "../../cards/pack/PackOfCards";
import style from "./PlayerLayout.module.css";
import { PlayerLayoutProps } from "../../../models/types/props/layout";

const PlayerLayout: React.FC<PlayerLayoutProps> = (props) => {
    return (
        <section className={style.playerLayoutContainer}>
            <PackOfCards {...props} />
        </section>
    );
};

export default PlayerLayout;
