import React from "react";
import style from "./RoundTitle.module.css";

const RoundTitle: React.FC = () => {
    return (
        <div className={style.roundTitle}>
            <span className={style.roundTitleRound}>Round</span>
            <span className={style.roundTitleCurrent}>1</span>
            <span className={style.roundTitleLeft}>/ 5</span>
        </div>
    );
};

export default RoundTitle;
