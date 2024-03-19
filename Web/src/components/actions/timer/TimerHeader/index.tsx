import React, { useEffect, useRef, useState } from "react";
import style from "./TimerHeader.module.css";
import { motion } from "framer-motion";
import { TimerHeaderProps } from "../../../../models/types/props/action";
import { timer } from "../../../../utils/date";
import useFinish from "../../../../hooks/gameplay/useFinish";
import { useGameStatusContext } from "../../../../context/GameStatusContext";
import { GAME_TIME } from "../../../../models/constant";

const TimerHeader: React.FC<TimerHeaderProps> = ({ time = GAME_TIME }) => {
    const { gameStatus, activateTimer } = useGameStatusContext();
    const { finishGame } = useFinish();
    const [initial, setInitial] = useState<boolean>(true);
    const [freezeAnimation, setFreezeAnimation] = useState<boolean>(false);
    const [remainingTime, setRemainingTime] = useState<number>(time); // Initial duration of 2 minutes in seconds
    const animationRef = useRef<any>(null);
    const checkRef = useRef<any>(false);
    const timeoutRef = useRef<any>(false);

    const handleTimeOut = () => {
        console.log("handleTimeOut 3", timeoutRef.current);
        if (!timeoutRef.current) {
            finishGame();
        }
    };

    useEffect(() => {
        console.log("isPlayerFinishRound 4");
    }, [gameStatus.isPlayerFinishRound]);

    useEffect(() => {
        timeoutRef.current = true;
        if (activateTimer) {
            console.log("activateTimer", timeoutRef.current);
            console.log("activateTimer - change to false");
            console.log("-------------------");
            setInitial(false);
            timeoutRef.current = false;
            timer(time, handleTimeOut);
        } else {
            console.log("else activateTimer", timeoutRef.current);
            console.log("else activateTimer - change to true");
            console.log("-------------------");
            timeoutRef.current = true;
            setInitial(true);
        }
    }, [activateTimer]);

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

// const freeze = () => {
//     setFreezeAnimation((prev) => !prev);
//     if (!freezeAnimation && animationRef.current) {
//         const remaining =
//             time -
//             (time * animationRef.current.offsetWidth) /
//                 animationRef.current.parentElement.offsetWidth;
//         setRemainingTime(remaining); // Calculate remaining time and store it
//     }
// };
