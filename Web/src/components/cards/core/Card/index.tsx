import React from "react";
import style from "./Card.module.css";
import CardInnerContainer from "./CardInnerContainer";
import Placeholder from "../Placeholder";
import Position from "../../shadow/Position";
import { CardProps } from "../../../../models/types/props/card";
import { styleSize } from "../../../../style/style";

const Card: React.FC<CardProps> = ({
    id,
    type,
    front,
    back,
    isFocus,
    position,
    size = "large",
    hasBorder = false,
}) => {
    const isPlayerType = type.t === "Player";
    const movieId = isPlayerType ? type.card.id : undefined;

    const sizeClass = styleSize(style)[size];

    return (
        <section id={id} className={sizeClass}>
            <CardInnerContainer type={type} isFocus={isFocus} hasBorder={hasBorder}>
                <Placeholder type={type} />
                <div className={style.cardFront}>{front}</div>
                {isPlayerType ? <div className={style.cardBack}>{back}</div> : null}
                {position ? <Position id={movieId} position={position} /> : null}
            </CardInnerContainer>
        </section>
    );
};

export default Card;
