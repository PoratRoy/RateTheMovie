import React from "react";
import style from "./Position.module.css";
import PositionRateStar from "../../core/PositionRateStar";
import { PositionProps } from "../../../../models/types/props/card";

const Position: React.FC<PositionProps> = ({ position, id }) => {
    return (
        <div id={id} className={style.cardPosition}>
            <PositionRateStar amount={position} size="large"/>
        </div>
    );
};

export default Position;
