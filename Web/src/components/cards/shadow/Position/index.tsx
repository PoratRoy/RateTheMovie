import React from "react";
import { PositionProps } from "../../../../models/types/props";
import style from "./Position.module.css";
import RateStar from "../../core/RateStar";

const Position: React.FC<PositionProps> = ({ position, id }) => {
    return (
        <div id={id} className={style.cardPosition}>
            <RateStar amount={position} size="large"/>
        </div>
    );
};

export default Position;
