import React from "react";
import style from "./Position.module.css";
import PositionRateStar from "../../core/PositionRateStar";
import { PositionProps } from "../../../../models/types/props/card";

const Position: React.FC<PositionProps> = ({ position, title, id }) => {
    return (
        <div id={id} className={style.cardPosition}>
            <div className={style.cardPositionStar}>
                <PositionRateStar amount={position} size="large" />
            </div>
            <div className={style.cardTitle}>{title}</div>
        </div>
    );
};

export default Position;
