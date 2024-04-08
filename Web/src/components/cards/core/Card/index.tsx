import React from "react";
import style from "./Card.module.css";
import cardStyle from "../../../../style/CardStyle.module.css";
import { styleSize } from "../../../../style/style";
import { CardProps } from "../../../../models/types/props/card";
import { CARD_ID } from "../../../../models/constant/ids";
import { PRIMARY_COLOR } from "../../../../style/root";
import { setPlaceholderText } from "../../../../utils/card";
import PositionRateStar from "../PositionRateStar";

const Card: React.FC<CardProps> = ({
    id,
    isFocus,
    content,
    hasDecoration,
    index = 0,
    size = "large",
    hasBorder = false,
}) => {
    const sizeClass = styleSize(cardStyle)[size];
    const className = hasDecoration
        ? `${style.cardDecoration} ${isFocus ? style.cardFocus : ""}`
        : style.cardInnerContainer;

    const text = setPlaceholderText(index);

    return (
        <section id={id} className={`${sizeClass} ${style.cardContainer}`}>
            <div
                id={CARD_ID}
                className={className}
                style={{ border: hasBorder ? `2px solid ${PRIMARY_COLOR}` : "none" }}
            >
                <div className={style.cardPlaceholder}>
                    <div className={style.cardPlaceholderText}>{text}</div>
                    <PositionRateStar amount={index + 1} />
                </div>
                <div className={style.cardFront}>{content}</div>
            </div>
        </section>
    );
};

export default Card;
