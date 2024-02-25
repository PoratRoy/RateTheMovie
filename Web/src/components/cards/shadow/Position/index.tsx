import React from "react";
import style from "./Position.module.css";
import RateStar from "../../core/RateStar";
import { PositionProps } from "../../../../models/types/props/card";

const Position: React.FC<PositionProps> = ({ position, id }) => {
    return (
        <div id={id} className={style.cardPosition}>
            <RateStar amount={position} size="large"/>
        </div>
    );
};

export default Position;
