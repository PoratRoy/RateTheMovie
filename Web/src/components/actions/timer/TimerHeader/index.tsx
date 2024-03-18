import React, { useEffect, useRef, useState } from "react";
import style from "./TimerHeader.module.css";
import { motion } from "framer-motion";
import { TimerHeaderProps } from "../../../../models/types/props/action";
import { useGamePlayContext } from "../../../../context/GamePlayContext";
import { timer } from "../../../../utils/date";
import useFinish from "../../../../hooks/gameplay/useFinish";

const TimerHeader: React.FC<TimerHeaderProps> = ({ time = 20, activate }) => {
    const { playerFinishRound } = useGamePlayContext();
    const { finishGame } = useFinish();
    const [initial, setInitial] = useState<boolean>(true);
    const [freezeAnimation, setFreezeAnimation] = useState<boolean>(false);
    const [remainingTime, setRemainingTime] = useState<number>(time); // Initial duration of 2 minutes in seconds
    const animationRef = useRef<any>(null);
    const checkRef = useRef<any>(false);
    const timeoutRef = useRef<any>(false);

    const handleTimeOut = () => {
        if(!timeoutRef.current){
            finishGame();
        }
    };

    useEffect(() => {
        if (playerFinishRound) {
            timeoutRef.current = true;
            // freeze();
        }
    }, [playerFinishRound]);

    useEffect(() => {
        console.log("activate", activate)
        if (activate && checkRef.current === false) {
            checkRef.current = true;
            setInitial(false);
            timer(time, handleTimeOut);
        } else if (!activate && checkRef.current === false) {
            setInitial(true);
        }
    }, [activate]);

    const freeze = () => {
        setFreezeAnimation((prev) => !prev);
        if (!freezeAnimation && animationRef.current) {
            const remaining =
                time -
                (time * animationRef.current.offsetWidth) /
                    animationRef.current.parentElement.offsetWidth;
            setRemainingTime(remaining); // Calculate remaining time and store it
        }
    };

    return (
        <div className={style.timerBarHeader}>
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

export default TimerHeader;
