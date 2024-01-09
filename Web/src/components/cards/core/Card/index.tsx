import React from "react";
import style from "./Card.module.css";
import { CARD_HEIGHT, CARD_WIDTH } from "../../../../style/root";
import { CardProps } from "../../../../models/types/props";
import CardInnerContainer from "./CardInnerContainer";
import Placeholder from "../Placeholder";

const Card: React.FC<CardProps> = ({
    id,
    type,
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
            <CardInnerContainer flip={flip} isAnimate={isAnimate} isFocus={isFocus}>
                <Placeholder type={type}/>
                <div className={style.cardFront}>{front}</div>
                <div className={style.cardBack}>{back}</div>
            </CardInnerContainer>
        </section>
    );
};

export default Card;
