import React from "react";
import style from "./Card.module.css";
import { CardProps } from "../../../../models/types/props";

const Card: React.FC<CardProps> = ({ children, onHover, width, height }) => {
    return (
        <section className={style.cardContanier}>
            {onHover && <div className={style.cardTitle}>{onHover}</div>}
            {children}
        </section>
    );
};

export default Card;
