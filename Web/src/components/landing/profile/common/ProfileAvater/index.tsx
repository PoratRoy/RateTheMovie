import React from "react";
import style from "./ProfileAvater.module.css";
import { ProfileAvaterProps } from "../../../../../models/types/props";

const ProfileAvater: React.FC<ProfileAvaterProps> = ({ img, isFocus = true }) => {
    const className = isFocus ? style.profileAvaterFocus : style.profileAvater; //TODO: refactor this
    //TODO: add animation

    return (
        <div className={className}>
            <img src={img} alt="avater" />
        </div>
    );
};

export default ProfileAvater;
