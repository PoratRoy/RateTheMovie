import React from "react";
import style from "./Avatar.module.css";
import { AvatarProps } from "../../../models/types/props/profile";

const Avatar: React.FC<AvatarProps> = ({ img, size = "small" }) => {
    const className = size === "large" ? style.profileAvatarLarge : style.profileAvatarSmall; //TODOCSS: refactor this
    //TODO: add animation

    return <div className={className}>{img ? <img src={img} alt="avatar" /> : null}</div>;
};

export default Avatar;
