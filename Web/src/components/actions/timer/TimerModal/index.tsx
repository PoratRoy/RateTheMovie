import React, { useMemo } from "react";
import style from "./TimerModal.module.css";
import { motion } from "framer-motion";
import { TimerModalProps } from "../../../../models/types/props/action";
import { MODAL_TIME } from "../../../../models/constant";
import { useTimer } from "react-timer-hook";

const TimerModal: React.FC<TimerModalProps> = ({ handleTimeOut, duration = MODAL_TIME }) => {
    const expiryTimestamp = new Date();
    expiryTimestamp.setSeconds(expiryTimestamp.getSeconds() + duration);

    const { seconds, minutes } = useTimer({
        expiryTimestamp,
        autoStart: true,
        onExpire: handleTimeOut,
    });

    // Calculate progress percentage
    const progress = useMemo(() => {
        const totalSeconds = duration;
        const remainingSeconds = minutes * 60 + seconds;
        return (remainingSeconds / totalSeconds) * 100;
    }, [minutes, seconds]);

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
