import React from "react";
import style from "./Rate.module.css";
import { RateProps } from "../../../../models/types/props/card";

const Rate: React.FC<RateProps> = ({ rate, id }) => {
    return (
        <div id={id} className={style.cardRateWrapper} style={{ display: "none", opacity: 0 }}>
            <div className={style.cardRate}>{rate}</div>
        </div>
    );
};

export default Rate;
