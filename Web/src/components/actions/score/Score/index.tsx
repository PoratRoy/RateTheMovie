import React from "react";
import { motion } from "framer-motion";
import style from "./Score.module.css";
import useCountingScoreAnimation from "../../../../hooks/animation/useCountingScoreAnimation";
import { ScoreProps } from "../../../../models/types/props/common";
import { useAnimationContext } from "../../../../context/AnimationContext";

const Score: React.FC<ScoreProps> = ({ score, isMotion = false }) => {
    const { increaseScore } = useAnimationContext();
    const { scoreRes } = useCountingScoreAnimation(increaseScore);

    return (
        <React.Fragment>
            {isMotion ? (
                <motion.div className={style.PlayerProfileScore}>{scoreRes}</motion.div>
            ) : (
                <div className={style.PlayerProfileScore}>{score}</div>
            )}
        </React.Fragment>
    );
};

export default Score;
