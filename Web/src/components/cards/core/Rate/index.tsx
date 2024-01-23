import React from "react";
import style from "./Rate.module.css";
import { RateProps } from "../../../../models/types/props";

const Rate: React.FC<RateProps> = ({ rate, id }) => {
    return (
        <div id={id} className={style.cardRate}>
            {rate}
        </div>
    );
};

export default Rate;
