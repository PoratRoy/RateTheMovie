import React from "react";
import style from "./OutOf.module.css";
import { OutOfProps } from "../../../models/types/props/common";

const OutOf: React.FC<OutOfProps> = ({ current, total, isDisabled = false }) => {
    return (
        <div className={`${style.outOf} ${isDisabled && style.outOfDisabled}`}>
            <span className={style.outOfCurrent}>{current}</span>
            <span className={style.outOfLeft}>
                <span>/</span>
                {total}
            </span>
        </div>
    );
};

export default OutOf;
