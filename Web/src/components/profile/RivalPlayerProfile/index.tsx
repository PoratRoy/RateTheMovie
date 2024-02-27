import React from "react";
import Avater from "../Avater";
import { AvaterImgs } from "../../../models/resources/avaters";
import { RivalPlayerProfileProps } from "../../../models/types/props/profile";
import style from "./RivalPlayerProfile.module.css";

const RivalPlayerProfile: React.FC<RivalPlayerProfileProps> = ({ player }) => {
    const { avater, name } = player;
    return (
        <section className={style.rivalPlayerProfile}>
            <Avater img={AvaterImgs[avater]} />
            <div className={style.rivalPlayerName}>{name}</div>
        </section>
    );
};

export default RivalPlayerProfile;
