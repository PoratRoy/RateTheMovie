import React, { useEffect, useMemo } from "react";
import style from "./TimerHeader.module.css";
import { motion } from "framer-motion";
import { TimerHeaderProps } from "../../../../models/types/props/action";
import useFinish from "../../../../hooks/gameplay/useFinish";
import { GAME_TIME } from "../../../../models/constant";
import { useTimer } from "react-timer-hook";
import { useGamePlayContext } from "../../../../context/GamePlayContext";

const TimerHeader: React.FC<TimerHeaderProps> = ({ duration = GAME_TIME }) => {
    const { game, activateTimer } = useGamePlayContext();
    const { finishGame } = useFinish();

    const expiryTimestamp = new Date();
    expiryTimestamp.setSeconds(expiryTimestamp.getSeconds() + duration);

    const handleTimeOut = () => {
        setTimeout(() => {
            pause();
            finishGame();
        }, 1000);
    };

    const { seconds, minutes, restart, pause } = useTimer({
        expiryTimestamp,
        autoStart: false,
        onExpire: handleTimeOut,
    });

    // Calculate progress percentage
    const progress = useMemo(() => {
        const totalSeconds = duration;
        const remainingSeconds = minutes * 60 + seconds;
        return (remainingSeconds / totalSeconds) * 100;
    }, [minutes, seconds]);

    useEffect(() => {
        if (game?.isPlayerFinishRound) {
            pause();
        }
    }, [game?.isPlayerFinishRound]);

    useEffect(() => {
        if (activateTimer) {
            restart(expiryTimestamp);
        }
    }, [activateTimer]);

    return (
        <div className={style.timerBarHeader}>
            <motion.div
                initial={{ width: "100%" }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 1, ease: "linear" }}
                className={style.progressBar}
            />
        </div>
    );
};

export default TimerHeader;
