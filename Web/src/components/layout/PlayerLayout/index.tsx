import React from "react";
import PackOfCards from "../../cards/pack/PackOfCards";
import style from "./PlayerLayout.module.css"
import { PlayerLayoutProps } from "../../../models/types/props/layout";

const PlayerLayout: React.FC<PlayerLayoutProps> = ({ player }) => {
    return (
        <section className={style.playerLayoutContainer}>
            <PackOfCards player={player}/>
        </section>
    );
};

export default PlayerLayout;
