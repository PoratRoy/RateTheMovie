import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import style from "./CountDown.module.css";

const CountDown: React.FC = () => {
    const time = 3;
    const [second, setSecond] = useState<string | number>(time);

    useEffect(() => {
        for (let s = time; s <= 0; s--) {
            const intervalId = setInterval(() => {
                setSecond(s === 0 ? "GO" : s);
            }, 1000);

            return () => clearInterval(intervalId);
        }
    }, []);

    return (
        <motion.div
            initial={{ scale: 0.1 }}
            animate={{
                scale: [1, 0.1],
                transition: { duration: 1, repeat: time },
            }}
            className={style.countDown}
        >
            {second}
        </motion.div>
    );
};

export default CountDown;
