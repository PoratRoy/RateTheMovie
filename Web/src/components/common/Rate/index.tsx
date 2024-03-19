import React from "react";
import style from "./Rate.module.css";
import { DisplayBlock, DisplayNone } from "../../../style/style";
import { RateProps } from "../../../models/types/props/common";

const Rate: React.FC<RateProps> = ({ rate, id, position = "absolute" }) => {
    const className =
        position === "absolute" ? style.cardRateWrapperAbsolute : style.cardRateWrapperRelative; //TODOCSS: refactor this

    return (
        <div id={id} className={className} style={id ? DisplayNone : DisplayBlock}>
            <div className={style.cardRate}>{rate}</div>
        </div>
    );
};

export default Rate;
