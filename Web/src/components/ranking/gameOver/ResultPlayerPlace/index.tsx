import React from "react";
import style from "./ResultPlayerPlace.module.css";
import { AvatarImgs } from "../../../../models/resources/avatars";
import { ResultPlayerProfileProps } from "../../../../models/types/props/profile";
import Place from "./Place";
import Avatar from "../../../profile/Avatar";

const ResultPlayerPlace: React.FC<ResultPlayerProfileProps> = ({ player, place }) => {
    const { avatar, name, score } = player;

    return (
        <Place place={place} playerId={player.id}>
            <section className={style.resultPlayerProfile}>
                <Avatar img={AvatarImgs[avatar]} />
                <div className={style.resultPlayerName}>{name}</div>
                <div className={style.resultPlayerScore}>{score}</div>
            </section>
        </Place>
    );
};

export default ResultPlayerPlace;
