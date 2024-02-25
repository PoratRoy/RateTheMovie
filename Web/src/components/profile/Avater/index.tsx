import React from "react";
import style from "./Avater.module.css";
import { AvaterProps } from "../../../models/types/props/profile";

const Avater: React.FC<AvaterProps> = ({ img, isFocus = false }) => {
    const className = isFocus ? style.profileAvaterFocus : style.profileAvater; //TODOCSS: refactor this
    //TODO: add animation

    return <div className={className}>{img ? <img src={img} alt="avater" /> : null}</div>;
};

export default Avater;
