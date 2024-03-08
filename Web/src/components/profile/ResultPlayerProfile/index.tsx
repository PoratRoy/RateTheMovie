import React from "react";
import Avater from "../Avater";
import style from "./ResultPlayerProfile.module.css";
import { AvaterImgs } from "../../../models/resources/avaters";
import { ResultPlayerProfileProps } from "../../../models/types/props/profile";
import Place from "../Place";

const ResultPlayerProfile: React.FC<ResultPlayerProfileProps> = ({ player, place }) => {
    const { avater, name, score } = player;

    return (
        <Place place={place}>
            <section className={style.resultPlayerProfile}>
                <Avater img={AvaterImgs[avater]} />
                <div className={style.resultPlayerName}>{name}</div>
                <div className={style.resultPlayerScore}>{score}</div>
            </section>
        </Place>
    );
};

export default ResultPlayerProfile;
