import React, { useRef, useState } from "react";
import style from "./TimerBar.module.css";
import { motion } from "framer-motion";

const TimerBar: React.FC = () => {
    const [freezeAnimation, setFreezeAnimation] = useState(false);
    const [remainingTime, setRemainingTime] = useState(20); // Initial duration of 2 minutes in seconds
    const animationRef = useRef<any>(null);

    const freeze = () => {
        setFreezeAnimation((prev) => !prev);
        if (!freezeAnimation && animationRef.current) {
            const remaining =
                20 -
                (20 * animationRef.current.offsetWidth) /
                    animationRef.current.parentElement.offsetWidth;
            setRemainingTime(remaining); // Calculate remaining time and store it
        }
    };

    return (
        <div className={style.progressBarContainer}>
            <motion.div
                ref={animationRef}
                animate={{
                    width: freezeAnimation ? animationRef.current.offsetWidth : "0%",
                    transition: { duration: remainingTime, ease: "linear" },
                }}
                className={style.progressBar}
            ></motion.div>
        </div>
    );
};

export default TimerBar;
