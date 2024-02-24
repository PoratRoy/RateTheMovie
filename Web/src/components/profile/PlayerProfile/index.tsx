import React from "react";
import Avater from "../Avater";
import { useGamePlayContext } from "../../../context/GamePlayContext";
import { AvaterImgs } from "../../../models/avaters";
import style from "./PlayerProfile.module.css";

const PlayerProfile: React.FC = () => {
    const { players } = useGamePlayContext();
    const { avater, score, name } = players[0];

    return (
        <section className={style.PlayerProfile}>
            <div className={style.PlayerProfileAvater}>
                <Avater img={AvaterImgs[avater]} />
            </div>
            <div className={style.PlayerProfileDetails}>
                <div className={style.PlayerProfileScore}>{score}</div>
                <div className={style.PlayerProfileName}>{name}</div>
            </div>
        </section>
    );
};

export default PlayerProfile;
