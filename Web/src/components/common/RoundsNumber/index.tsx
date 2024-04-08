import React from "react";
import style from "./RoundsNumber.module.css";
import { RoundsNumberProps } from "../../../models/types/props/common";
import OutOf from "../OutOf";

const RoundsNumber: React.FC<RoundsNumberProps> = ({ current, total }) => {
    return (
        <div className={style.roundTitle}>
            <span className={style.roundTitleRound}>Round</span>
            <OutOf current={current} total={total} />
        </div>
    );
};

export default RoundsNumber;
