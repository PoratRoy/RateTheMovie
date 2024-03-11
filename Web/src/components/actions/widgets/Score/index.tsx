import React from "react";
import { motion } from "framer-motion";
import style from "./Score.module.css";
import useCountingScoreAnimation from "../../../../hooks/animation/useCountingScoreAnimation";
import { useGamePlayContext } from "../../../../context/GamePlayContext";
import { ScoreProps } from "../../../../models/types/props/common";
import { useAnimationContext } from "../../../../context/AnimationContext";
//TODO: not in use
const Score: React.FC<ScoreProps> = ({ score }) => {
    const { playerFinishRound, setIsRoundFinished } = useGamePlayContext();
    const { increaseScore } = useAnimationContext();
    const handleComplete = () => {
        if (playerFinishRound) {
            setTimeout(() => {
                setIsRoundFinished(true);
            }, 500);
        }
    };
    const { scoreRes } = useCountingScoreAnimation(score, increaseScore, handleComplete);

    return (
        <section className={style.score}>
            <label>Score</label>
            <motion.div className={style.scoreNum}>{scoreRes}</motion.div>
        </section>
    );
};

export default Score;
