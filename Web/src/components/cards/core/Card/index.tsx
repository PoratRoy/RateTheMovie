import React from "react";
import style from "./Card.module.css";
import { CardProps } from "../../../../models/types/props";
import CardInnerContainer from "./CardInnerContainer";
import Placeholder from "../Placeholder";

const Card: React.FC<CardProps> = ({
    id,
    type,
    front,
    back,
    flip,
    isFocus,
    size = "large",
}) => {
    const sizeClass = size === "large" ? style.cardContainerLarge : style.cardContainerSmall;
    return (
        <section id={id} className={sizeClass}>
            <CardInnerContainer type={type.t} flip={flip} isFocus={isFocus}>
                <Placeholder type={type} />
                <div className={style.cardFront}>{front}</div>
                <div className={style.cardBack}>{back}</div>
            </CardInnerContainer>
        </section>
    );
};

export default Card;
