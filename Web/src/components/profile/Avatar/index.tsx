import React from "react";
import style from "./Avatar.module.css";
import { AvatarProps } from "../../../models/types/props/profile";
import { styleSize } from "../../../style/style";

const Avatar: React.FC<AvatarProps> = ({ img, size = "small" }) => {
    const className = styleSize(style)[size];
    //TODO: add animation

    return <div className={className}>{img ? <img src={img} alt="avatar" /> : null}</div>;
};

export default Avatar;
