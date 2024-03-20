import React from "react";
import { useTimer } from "react-timer-hook";
import { motion } from "framer-motion";

const ProgressTimer: React.FC<{ duration?: number }> = ({ duration = 20 }) => {
    const expiryTimestamp = new Date();
    expiryTimestamp.setSeconds(expiryTimestamp.getSeconds() + duration);

    const { seconds, minutes, restart, pause, resume, isRunning } = useTimer({
        expiryTimestamp,
        autoStart: true,
    });

    // Calculate progress percentage
    const totalSeconds = duration;
    const remainingSeconds = minutes * 60 + seconds;
    const progress = (remainingSeconds / totalSeconds) * 100;

    return (
        <div>
            <div>
                Time Left: {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
            </div>
            <motion.div
                initial={{ width: "100%" }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 1 }}
                style={{
                    height: 20,
                    backgroundColor: "green",
                    borderRadius: 10,
                    marginTop: 10,
                }}
            />
            <button onClick={() => pause()}>STOP</button>
            <button onClick={() => resume()}>RESUME</button>
            <button
                onClick={() => {
                    const time = new Date();
                    time.setSeconds(time.getSeconds() + duration);
                    restart(time);
                }}
            >
                Restart
            </button>
        </div>
    );
};

export default ProgressTimer;
