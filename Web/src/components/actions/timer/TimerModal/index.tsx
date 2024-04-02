import React from "react";
import style from "./TimerModal.module.css";
import { motion } from "framer-motion";
import { TimerModalProps } from "../../../../models/types/props/action";
import { MODAL_TIME } from "../../../../models/constant/time";
import useTimer from "../../../../hooks/multiplayer/useTimer";

const TimerModal: React.FC<TimerModalProps> = ({ handleTimeOut, duration = MODAL_TIME }) => {
    const { progress } = useTimer(duration, handleTimeOut, true);

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
