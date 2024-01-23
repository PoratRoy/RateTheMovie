import React, { useEffect } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { ScoreProps } from "../../../models/types/props";
import style from "./Score.module.css";

const Score: React.FC<ScoreProps> = ({ score }) => {
    const count = useMotionValue(0);
    const rounded = useTransform(count, Math.round);

    useEffect(() => {
        const animation = animate(count, score, {
            duration: 2,
        });

        return animation.stop;
    }, []);

    return (
        <section className={style.score}>
            <label>Score</label>
            <div className={style.scoreNum}>
                <motion.div>{rounded}</motion.div>
            </div>
        </section>
    );
};

export default Score;
