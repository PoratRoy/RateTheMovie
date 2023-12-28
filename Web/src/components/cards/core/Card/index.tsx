import React from "react";
import style from "./Card.module.css";
import { CardProps } from "../../../../models/types/props";

const Card: React.FC<CardProps> = ({ children, onHover, isShadow, width = 135, height = 200 }) => {
    return (
        <section
            style={{ width, height }}
            className={`${style.cardContanier} ${isShadow && style.cardShadow}`}
        >
            {onHover && <div className={style.cardTitle}>{onHover}</div>}
            {children}
        </section>
    );
};

export default Card;
