import React from "react";
import style from "./RoundTitle.module.css";
import { RoundTitleProps } from "../../../models/types/props/common";
import OutOf from "../OutOf";

const RoundTitle: React.FC<RoundTitleProps> = ({ current, total }) => {
    return (
        <div className={style.roundTitle}>
            <span className={style.roundTitleRound}>Round</span>
            <OutOf current={current} total={total} />
        </div>
    );
};

export default RoundTitle;
