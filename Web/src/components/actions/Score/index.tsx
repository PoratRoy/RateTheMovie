import React from "react";
import { ScoreProps } from "../../../models/types/props";
import style from "./Score.module.css"

const Score: React.FC<ScoreProps> = ({ score }) => {
    return <div className={style.score}>{score}</div>;
};

export default Score;
