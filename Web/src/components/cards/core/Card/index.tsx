import React from "react";
import style from "./Card.module.css";
import { CardProps } from "../../../../models/types/props/card";
import { CARD_ID } from "../../../../models/constant/ids";
import { PRIMARY_COLOR } from "../../../../style/root";
import { setPlaceholderText } from "../../../../utils/card";
import PositionRateStar from "../PositionRateStar";
import CardLayout from "../../../layout/CardLayout";
import Decoration from "../../../../assets/cardDecoration.svg";

const Card: React.FC<CardProps> = ({
    id,
    isFocus,
    content,
    hasDecoration,
    onClick,
    index = 0,
    size = "large",
    hasBorder = false,
}) => {
    const className = `${style.cardInnerContainer} ${isFocus ? style.cardFocus : ""}`

    const text = setPlaceholderText(index);

    return (
        <CardLayout id={id} onClick={onClick} size={size}>
            <div
                id={CARD_ID}
                className={className}
                style={{ border: hasBorder ? `2px solid ${PRIMARY_COLOR}` : "none" }}
            >
                {hasDecoration ? (
                    <img
                        className={style.cardPlaceholderDecoration}
                        src={Decoration}
                        alt="Card decoration"
                    />
                ) : null}

                <div className={style.cardPlaceholder}>
                    <div className={style.cardPlaceholderText}>{text}</div>
                    <PositionRateStar amount={index + 1} />
                </div>
                <div className={style.cardFront}>{content}</div>
            </div>
        </CardLayout>
    );
};

export default Card;
