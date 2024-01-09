import React from "react";
import style from "./Card.module.css";
import { CARD_HEIGHT, CARD_WIDTH } from "../../../../style/root";
import PlaceholderIcon from "../PlaceholderIcon";
import { CardProps } from "../../../../models/types/props";
import CardInnerContainer from "./CardInnerContainer";

const Card: React.FC<CardProps> = ({
    id,
    front,
    back,
    isFocus,
    isAnimate,
    flip,
    width = CARD_WIDTH,
    height = CARD_HEIGHT,
}) => {
    return (
        <section id={id} style={{ width, height }} className={style.cardContainer}>
            <div className={style.cardPlaceholder}>
                <PlaceholderIcon />
            </div>
            <CardInnerContainer flip={flip} isAnimate={isAnimate} isFocus={isFocus}>
                <div className={style.cardFront}>{front}</div>
                <div className={style.cardBack}>{back}</div>
            </CardInnerContainer>
        </section>
    );
};

export default Card;
