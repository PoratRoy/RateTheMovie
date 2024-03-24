import React from "react";
import style from "./CardPoints.module.css";
import { CardPointsProps } from "../../../../models/types/props/common";
import { DisplayNone } from "../../../../style/style";
import { POINTS_ID } from "../../../../models/constant/ids";

const CardPoints: React.FC<CardPointsProps> = ({ index, isRightChoice, score = 100 }) => {
    const id = isRightChoice ? `${POINTS_ID}-${index}` : POINTS_ID;
    return (
        <section id={id} className={style.cardPoints} style={DisplayNone}>
            <span>+{score}</span>
        </section>
    );
};

export default CardPoints;
