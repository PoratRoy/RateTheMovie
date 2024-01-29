import React from "react";
import style from "./Card.module.css";
import useCardOrderPosition from "../../../../hooks/useCardOrderPosition";
import { CardProps } from "../../../../models/types/props";
import CardInnerContainer from "./CardInnerContainer";
import Placeholder from "../Placeholder";
import Position from "../Position";

const Card: React.FC<CardProps> = ({ id, type, front, back, flip, isFocus, size = "large" }) => {
    const pos = useCardOrderPosition(type);
    const movieId = type.t === "Player" ? type.movie.imdbID : undefined;
    const sizeClass = size === "large" ? style.cardContainerLarge : style.cardContainerSmall; //TODO: refactor
    return (
        <section id={id} className={sizeClass}>
            <CardInnerContainer type={type.t} flip={flip} isFocus={isFocus}>
                <Placeholder type={type} />
                <div className={style.cardFront}>{front}</div>
                <div className={style.cardBack}>{back}</div>
                {pos && <Position id={movieId} position={pos} />}
            </CardInnerContainer>
        </section>
    );
};

export default Card;
