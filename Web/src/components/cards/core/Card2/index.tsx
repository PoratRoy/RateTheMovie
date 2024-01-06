import React from "react";
import style from "./Card.module.css";
import { CardProps } from "../../../../models/types/props";
import { CARD_HEIGHT, CARD_WIDTH } from "../../../../style/root";
import { CARD_ID } from "../../../../models/constants";
import PlaceholderIcon from "../../core/PlaceholderIcon";

const Card2: React.FC<CardProps> = ({
    front,
    back,
    isFocus,
    width = CARD_WIDTH,
    height = CARD_HEIGHT,
}) => {

    return (
        <section
            style={{ width, height }}
            className={`${style.cardContainer} ${isFocus ? style.cardContainerFocus : ""}`}
        >
            <div className={style.cardPlaceholder}>
                <PlaceholderIcon />
            </div>
            <div id={CARD_ID} className={style.cardInnerContainer}>
                <div className={style.cardFront}>{front}</div>
                <div className={style.cardBack}>{back}</div>
            </div>
        </section>
    );
};

export default Card2;
