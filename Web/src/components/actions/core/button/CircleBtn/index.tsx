import React from "react";
import { CircleBtnProps } from "../../../../../models/types/props/btn";
import style from "./CircleBtn.module.css";
import { styleBtnSize } from "../../../../../style/style";

const CircleBtn: React.FC<CircleBtnProps> = ({ id, onClicked, Icon, size = "large" }) => {
    const className = styleBtnSize(style)[size];

    return (
        <div id={id} onClick={onClicked} className={className}>
            <div className={style.circleIcon}>{Icon}</div>
        </div>
    );
};

export default CircleBtn;
