import React, { useEffect, useRef } from "react";
import style from "./RoundTimer.module.css";
import { motion } from "framer-motion";
import { RoundTimerProps } from "../../../../models/types/props/action";
import useFinish from "../../../../hooks/gameplay/useFinish";
import { GAME_TIME, SECOND_TIME } from "../../../../models/constant/time";
import { useGamePlayContext } from "../../../../context/GamePlayContext";
import Session from "../../../../utils/storage/sessionStorage";
import { SessionKey } from "../../../../models/enums/session";
import useTimer from "../../../../hooks/time/useTimer";
import { Time } from "../../../../models/types/common";
import { useAnimationContext } from "../../../../context/AnimationContext";

const RoundTimer: React.FC<RoundTimerProps> = ({ duration = GAME_TIME }) => {
    const { activateTimer, game } = useGamePlayContext();
    const { activateFinishAnimation } = useAnimationContext();
    const { finishGame } = useFinish();
    const timeLockRef = useRef<boolean>(true);

    const handleTimeOut = () => {
        setTimeout(() => {
            timeLockRef.current = true;
            pause();
            finishGame();
        }, SECOND_TIME);
    };

    const { expiryTimestamp, progress, pause, restart, refresh } = useTimer(
        SessionKey.ROUND_TIMER,
        duration,
        handleTimeOut,
    );

    useEffect(() => {
        if (activateFinishAnimation) {
            timeLockRef.current = true;
            pause();
        }
    }, [activateFinishAnimation]);

    useEffect(() => {
        if (timeLockRef.current) {
            const sessionTime: Time | undefined = Session.get(SessionKey.ROUND_TIMER);
            if (sessionTime) {
                if (game?.isPlayerFinishRound) {
                    timeLockRef.current = true;
                    pause();
                } else {
                    timeLockRef.current = false;
                    refresh(sessionTime);
                }
            } else if (activateTimer) {
                restart(expiryTimestamp);
            }
        }
    }, [activateTimer]);

    return (
        <div className={style.roundTimerBar}>
            <motion.div
                initial={{ width: "100%" }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 1, ease: "linear" }}
                className={style.progressBar}
            />
        </div>
    );
};

export default RoundTimer;
