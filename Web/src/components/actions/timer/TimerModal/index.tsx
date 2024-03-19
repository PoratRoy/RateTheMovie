import React, { useEffect, useRef } from "react";
import style from "./TimerModal.module.css";
import { motion } from "framer-motion";
import { TimerModalProps } from "../../../../models/types/props/action";
import { timer } from "../../../../utils/date";
import useGameActions from "../../../../hooks/gameplay/useGameActions";

const TimerModal: React.FC<TimerModalProps> = ({ time = 20, activate, close }) => {
    const animationRef = useRef<any>(null);
    const checkRef = useRef<any>(false);
    const { handleContinue } = useGameActions(close);

    const handleTimeOut = () => {
        handleContinue();
    };

    useEffect(() => {
        if (activate && checkRef.current === false) {
            checkRef.current = true;
            timer(time, handleTimeOut);
        }
    }, [activate]);

    return (
        <div className={style.timerBarModal}>
            <motion.div
                ref={animationRef}
                animate={{
                    width: "0%",
                    transition: { duration: time, ease: "linear" },
                }}
                className={style.progressBar}
            ></motion.div>
        </div>
    );
};

export default TimerModal;