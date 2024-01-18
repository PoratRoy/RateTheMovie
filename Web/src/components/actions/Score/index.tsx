import React from "react";
import { ScoreProps } from "../../../models/types/props";
import style from "./Score.module.css";

const Score: React.FC<ScoreProps> = ({ score }) => {
    return (
        <section className={style.score}>
            <label>Score</label>
            <div className={style.scoreNum}>{score}</div>
        </section>
    );
};

export default Score;
