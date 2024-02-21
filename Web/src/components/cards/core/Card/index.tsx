import React from "react";
import style from "./Card.module.css";
import { CardProps } from "../../../../models/types/props";
import CardInnerContainer from "./CardInnerContainer";
import Placeholder from "../Placeholder";
import Position from "../../shadow/Position";

const Card: React.FC<CardProps> = ({id, type, front, back, flip, isFocus, position, size = "large"}) => {
    const isPlayerType = type.t === "Player";
    const movieId = isPlayerType ? type.card.id : undefined;
    const sizeClass = size === "large" ? style.cardContainerLarge : style.cardContainerSmall; //TODO: refactor
    return (
        <section id={id} className={sizeClass}>
            <CardInnerContainer type={type.t} flip={flip} isFocus={isFocus}>
                <Placeholder type={type} />
                <div className={style.cardFront}>{front}</div>
                {isPlayerType ? <div className={style.cardBack}>{back}</div> : null}
                {position ? <Position id={movieId} position={position} /> : null}
            </CardInnerContainer>
        </section>
    );
};

export default Card;
