import React from "react";
import style from "./PlayersPackLayout.module.css";
import PackWrapper from "../../cards/wrapper/PackWrapper";
import { PlayersPackLayoutProps } from "../../../models/types/props";

const PlayersPackLayout: React.FC<PlayersPackLayoutProps> = ({ children }) => {
    return (
        <section className={style.playerPackContainer}>
            <PackWrapper>{children}</PackWrapper>
        </section>
    );
};

export default PlayersPackLayout;
