import React, { useEffect, useState } from "react";
import style from "./CountDown.module.css";
import { CountDownProps } from "../../../../models/types/props/common";

const CountDown: React.FC<CountDownProps> = ({ time, closeTimer }) => {
    const [counter, setCounter] = useState<number>(time);

    useEffect(() => {
        let timer: any;
        if (counter === -1) {
            closeTimer();
        } else {
            timer = setInterval(() => {
                setCounter((prev) => prev - 1);
            }, 1000);
        }
        return () => clearInterval(timer);
    }, [counter]);

    return (
        <div className={style.countDown}>
            <div
                className={style.countDownBox}
                style={{ animation: `fadeOut ${time + 1}s ease forwards` }}
            />
            <h1 className={style.countDownNumber}>{counter === 0 ? "GO" : counter}</h1>
        </div>
    );
};

export default CountDown;
