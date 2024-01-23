import React from "react";
import { motion } from "framer-motion";
import { ScoreProps } from "../../../models/types/props";
import style from "./Score.module.css";
import useCountingScore from "../../../hooks/useCountingScore";

const Score: React.FC<ScoreProps> = ({ score }) => {
    const { scoreRes } = useCountingScore(score);

    return (
        <section className={style.score}>
            <label>Score</label>
            <motion.div className={style.scoreNum}>{scoreRes}</motion.div>
        </section>
    );
};

export default Score;
