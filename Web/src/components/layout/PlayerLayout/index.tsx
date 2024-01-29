import React from "react";
import PackOfCards from "../../cards/pack/PackOfCards";
import { PlayerLayoutProps } from "../../../models/types/props";
import style from "./PlayerLayout.module.css"

const PlayerLayout: React.FC<PlayerLayoutProps> = ({ player }) => {
    return (
        <section className={style.playerLayoutContainer}>
            <PackOfCards player={player}/>
        </section>
    );
};

export default PlayerLayout;
