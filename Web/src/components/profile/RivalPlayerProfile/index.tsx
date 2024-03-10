import React from "react";
import Avatar from "../Avatar";
import { AvatarImgs } from "../../../models/resources/avatars";
import { RivalPlayerProfileProps } from "../../../models/types/props/profile";
import style from "./RivalPlayerProfile.module.css";

const RivalPlayerProfile: React.FC<RivalPlayerProfileProps> = ({ player }) => {
    const { avatar, name } = player;
    return (
        <section className={style.rivalPlayerProfile}>
            <Avatar img={AvatarImgs[avatar]} />
            <div className={style.rivalPlayerName}>{name}</div>
        </section>
    );
};

export default RivalPlayerProfile;
