import React, { useEffect, useRef } from "react";
import style from "./TimerModal.module.css";
import { motion } from "framer-motion";
import { TimerModalProps } from "../../../../models/types/props/action";
import { MODAL_TIME } from "../../../../models/constant/time";
import useTimer from "../../../../hooks/multiplayer/useTimer";
import { Time } from "../../../../models/types/common";
import Session from "../../../../utils/storage/sessionStorage";
import { SessionKey } from "../../../../models/enums/session";

const TimerModal: React.FC<TimerModalProps> = ({ handleTimeOut, duration = MODAL_TIME }) => {
    const { expiryTimestamp, progress, refresh, restart } = useTimer(duration, handleTimeOut);
    const timeLockRef = useRef<boolean>(true);

    useEffect(() => {
        if (timeLockRef.current) {
            const sessionTime: Time | undefined = Session.get(SessionKey.TIMER);
            sessionTime ? refresh(sessionTime) : restart(expiryTimestamp);
            timeLockRef.current = false;
        }
    }, []);

    return (
        <div className={style.timerBarModal}>
            <motion.div
                initial={{ width: "100%" }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 1, ease: "linear" }}
                className={style.progressBar}
            ></motion.div>
        </div>
    );
};

export default TimerModal;
