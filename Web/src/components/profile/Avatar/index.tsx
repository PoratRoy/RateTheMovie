import React from "react";
import style from "./Avatar.module.css";
import { AvatarProps } from "../../../models/types/props/profile";

const Avatar: React.FC<AvatarProps> = ({ img, isFocus = false }) => {
    const className = isFocus ? style.profileAvatarFocus : style.profileAvatar; //TODOCSS: refactor this
    //TODO: add animation

    return <div className={className}>{img ? <img src={img} alt="avatar" /> : null}</div>;
};

export default Avatar;
