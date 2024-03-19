import React from "react";
import style from "./RoundTitle.module.css";
import { RoundTitleProps } from "../../../models/types/props/common";

const RoundTitle: React.FC<RoundTitleProps> = ({current, total}) => {
    return (
        <div className={style.roundTitle}>
            <span className={style.roundTitleRound}>Round</span>
            <span className={style.roundTitleCurrent}>{current}</span>
            <span className={style.roundTitleLeft}>/ {total}</span>
        </div>
    );
};

export default RoundTitle;
