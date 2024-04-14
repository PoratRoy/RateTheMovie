import React from "react";
import Avatar from "../Avatar";
import { Avatars } from "../../../models/resources/avatars";
import { RivalPlayerProfileProps } from "../../../models/types/props/profile";
import style from "./RivalPlayerProfile.module.css";

const RivalPlayerProfile: React.FC<RivalPlayerProfileProps> = ({ player, isYou = false }) => {
    const { avatar, name } = player;
    //TODO: add fade animation when initial render
    return (
        <section className={style.rivalPlayerProfile}>
            {isYou ? <div className={style.you}>You</div> : null}
            <Avatar avatar={Avatars[avatar]} />
            <div className={style.rivalPlayerName}>{name}</div>
        </section>
    );
};

export default RivalPlayerProfile;
