import React from "react";
import style from "./Card.module.css";
import { CardProps } from "../../../../models/types/props";
import PlaceholderIcon from "../../core/PlaceholderIcon";

const Card: React.FC<CardProps> = ({ children, onHover, isShadow, width = 135, height = 200 }) => {
    return (
        <section
            onClick={() => console.log("click")}
            style={{ width, height }}
            className={`${style.cardContanier} ${isShadow && style.cardShadow}`}
        >
            {onHover && <div className={style.cardTitle}>{onHover}</div>}
            {children}
            <PlaceholderIcon />
        </section>
    );
};

export default Card;
