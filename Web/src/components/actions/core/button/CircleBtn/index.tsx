import React from "react";
import { CircleBtnProps } from "../../../../../models/types/props/btn";
import style from "./CircleBtn.module.css";

const CircleBtn: React.FC<CircleBtnProps> = ({ onClicked, Icon }) => {
    return (
        <div onClick={onClicked} className={style.circleBtn}>
            <div className={style.circleIcon}>{Icon}</div>
        </div>
    );
};

export default CircleBtn;
