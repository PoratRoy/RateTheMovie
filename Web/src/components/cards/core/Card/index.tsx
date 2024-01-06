import React from "react";
import style from "./Card.module.css";
import { CardInnerContainerProps, CardProps } from "../../../../models/types/props";
import { CARD_HEIGHT, CARD_WIDTH } from "../../../../style/root";
import { CARD_ID } from "../../../../models/constants";
import PlaceholderIcon from "../PlaceholderIcon";
import { motion } from "framer-motion";
import useCardFlipAnimation from "../../../../hooks/useCardFlipAnimation";

const CardInnerContainer: React.FC<CardInnerContainerProps> = ({ children, flip, isAnimate }) => {
    const { isFlipped, onAnimationComplete } = useCardFlipAnimation(flip);
    if (isAnimate) {
        return (
            <motion.div
                className={style.cardInnerContainer}
                initial={false}
                animate={{ rotateY: isFlipped ? 180 : 360 }}
                transition={{ duration: 0.3, animationDiraction: "normal" }}
                onAnimationComplete={onAnimationComplete}
            >
                {children}
            </motion.div>
        );
    } else {
        return (
            <div id={CARD_ID} className={style.cardInnerContainer}>
                {children}
            </div>
        );
    }
};

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
        <section
            id={id}
            style={{ width, height }}
            className={`${style.cardContainer} ${isFocus ? style.cardContainerFocus : ""}`}
        >
            <div className={style.cardPlaceholder}>
                <PlaceholderIcon />
            </div>
            <CardInnerContainer flip={flip} isAnimate={isAnimate}>
                <div className={style.cardFront}>{front}</div>
                <div className={style.cardBack}>{back}</div>
            </CardInnerContainer>
        </section>
    );
};

export default Card;
