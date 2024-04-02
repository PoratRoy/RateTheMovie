import React, { useEffect, useRef } from "react";
import style from "./TimerHeader.module.css";
import { motion } from "framer-motion";
import { TimerHeaderProps } from "../../../../models/types/props/action";
import useFinish from "../../../../hooks/gameplay/useFinish";
import { GAME_TIME, SECOND_TIME } from "../../../../models/constant/time";
import { useGamePlayContext } from "../../../../context/GamePlayContext";
import Session from "../../../../utils/storage/sessionStorage";
import { SessionKey } from "../../../../models/enums/session";
import useTimer from "../../../../hooks/multiplayer/useTimer";
import { Time } from "../../../../models/types/common";

const TimerHeader: React.FC<TimerHeaderProps> = ({ duration = GAME_TIME }) => {
    const { game, activateTimer } = useGamePlayContext();
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
        duration,
        handleTimeOut,
    );

    useEffect(() => {
        if (game?.isPlayerFinishRound) {
            timeLockRef.current = true;
            pause();
        }
    }, [game?.isPlayerFinishRound]);

    useEffect(() => {
        if (timeLockRef.current) {
            const sessionTime: Time | undefined = Session.get(SessionKey.TIMER);
            if (sessionTime) {
                refresh(sessionTime);
                timeLockRef.current = false;
            } else if (activateTimer) {
                restart(expiryTimestamp);
            }
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
