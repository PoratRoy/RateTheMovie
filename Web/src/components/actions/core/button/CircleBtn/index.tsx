import React from "react";
import { CircleBtnProps } from "../../../../../models/types/props/btn";
import style from "./CircleBtn.module.css";

const CircleBtn: React.FC<CircleBtnProps> = ({ onClicked, Icon, size = "medium" }) => {
    const className =
        size === "large"
            ? style.circleBtnLarge
            : size === "medium"
              ? style.circleBtnMedium
              : style.circleBtnSmall; //TODOCSS: refactor this

    return (
        <div onClick={onClicked} className={className}>
            <div className={style.circleIcon}>{Icon}</div>
        </div>
    );
};

export default CircleBtn;
