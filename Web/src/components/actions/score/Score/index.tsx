import React from "react";
import { motion } from "framer-motion";
import style from "./Score.module.css";
import useCountingScoreAnimation from "../../../../hooks/animation/useCountingScoreAnimation";
import { ScoreProps } from "../../../../models/types/props/common";
import { useAnimationContext } from "../../../../context/AnimationContext";

const Score: React.FC<ScoreProps> = () => {
    const { increaseScore } = useAnimationContext();
    const { scoreRes } = useCountingScoreAnimation(increaseScore);

    return <motion.div className={style.PlayerProfileScore}>{scoreRes}</motion.div>;
};

export default Score;
