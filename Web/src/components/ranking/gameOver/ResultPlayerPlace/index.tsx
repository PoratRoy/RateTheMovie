import React from "react";
import style from "./ResultPlayerPlace.module.css";
import { Avatars } from "../../../../models/resources/avatars";
import { ResultPlayerProfileProps } from "../../../../models/types/props/profile";
import Place from "./Place";
import Avatar from "../../../profile/Avatar";
import { Player } from "../../../../models/types/player";

const ResultPlayerPlace: React.FC<ResultPlayerProfileProps> = ({ players, place }) => {
    return (
        <Place place={place} players={players}>
            {players.map((player: Player, index: number) => (
                <section key={index} className={style.resultPlayerProfile}>
                    <Avatar avatar={Avatars[player.avatar]} />
                    <div className={style.resultPlayerName}>{player.name}</div>
                    <div className={style.resultPlayerScore}>{player.score}</div>
                </section>
            ))}
        </Place>
    );
};

export default ResultPlayerPlace;
