import React, { useEffect, useRef, useState } from "react";
import style from "./TimerBar.module.css";
import { motion } from "framer-motion";
import { TimerBarProps } from "../../../../models/types/props/action";
import { useGamePlayContext } from "../../../../context/GamePlayContext";

const TimerBar: React.FC<TimerBarProps> = ({ position = "relative", activate, callback }) => {
    const { playerFinishRound } = useGamePlayContext();
    const [initial, setInitial] = useState<boolean>(true);
    const [freezeAnimation, setFreezeAnimation] = useState<boolean>(false);
    const [remainingTime, setRemainingTime] = useState<number>(20); // Initial duration of 2 minutes in seconds
    const animationRef = useRef<any>(null);
    const checkRef = useRef<any>(false);

    const className =
        position === "absolute" ? style.progressBarAbsolute : style.progressBarRelative;

    useEffect(() => {
        if (playerFinishRound) {
            freeze();
        }
    }, [playerFinishRound]);

    useEffect(() => {
        if (activate && checkRef.current === false) {
            checkRef.current = true;
            setInitial(false);
            time();
        }
    }, [activate]);

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

    const time = () => {
        let timer = 20;
        const intervalId = setInterval(() => {
            if (timer === 0) {
                clearInterval(intervalId);
                callback && callback();
            }
            timer--;
        }, 1000);
    };

    return (
        <div className={className}>
            {initial ? (
                <div className={style.progressBar}></div>
            ) : (
                <motion.div
                    ref={animationRef}
                    animate={{
                        width: freezeAnimation ? animationRef.current.offsetWidth : "0%",
                        transition: { duration: remainingTime, ease: "linear" },
                    }}
                    className={style.progressBar}
                ></motion.div>
            )}
        </div>
    );
};

export default TimerBar;
