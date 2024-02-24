import React from "react";
import style from "./ProfileAvater.module.css";
import { ProfileAvaterProps } from "../../../../../models/types/props";

const ProfileAvater: React.FC<ProfileAvaterProps> = ({ img, isFocus = true }) => {
    const className = isFocus ? style.profileAvaterFocus : style.profileAvater; //TODOCSS: refactor this
    //TODO: add animation

    return <div className={className}>{img ? <img src={img} alt="avater" /> : null}</div>;
};

export default ProfileAvater;
