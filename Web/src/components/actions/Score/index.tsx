import React from "react";
import { motion } from "framer-motion";
import { ScoreProps } from "../../../models/types/props";
import style from "./Score.module.css";
import useCountingScoreAnimation from "../../../hooks/animation/useCountingScoreAnimation";
import { useGamePlayContext } from "../../../context/GamePlayContext";

const Score: React.FC<ScoreProps> = ({ score }) => {
    const { finish, finishAnimation, setPlayAgainBtn } = useGamePlayContext();
    const handleComplete = () => {
        if (finish) {
            setTimeout(() => {
                setPlayAgainBtn();
            }, 500);
        }
    };
    const { scoreRes } = useCountingScoreAnimation(
        score,
        finishAnimation.increaseScore,
        handleComplete,
    );

    return (
        <section className={style.score}>
            <label>Score</label>
            <motion.div className={style.scoreNum}>{scoreRes}</motion.div>
        </section>
    );
};

export default Score;
