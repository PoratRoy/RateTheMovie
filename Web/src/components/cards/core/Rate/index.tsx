import React from "react";
import style from "./Rate.module.css";
import { RateProps } from "../../../../models/types/props/card";
import { DisplayBlock, DisplayNone } from "../../../../style/style";

const Rate: React.FC<RateProps> = ({ rate, id }) => {
    return (
        <div
            id={id}
            className={style.cardRateWrapper}
            style={id ? DisplayNone : DisplayBlock}
        >
            <div className={style.cardRate}>{rate}</div>
        </div>
    );
};

export default Rate;
