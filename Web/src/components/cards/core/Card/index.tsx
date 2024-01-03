import React from "react";
import style from "./Card.module.css";
import { CardProps } from "../../../../models/types/props";
import PlaceholderIcon from "../../core/PlaceholderIcon";
import { motion } from "framer-motion";
import { CARD_HEIGHT, CARD_WIDTH } from "../../../../style/root";
import useCardAnimation from "../../../../hooks/useCardAnimation";

const Card: React.FC<CardProps> = ({
    children,
    isFocus,
    flip,
    width = CARD_WIDTH,
    height = CARD_HEIGHT,
}) => {
    const { isFlipped, onAnimationComplete } = useCardAnimation(flip);

    return (
        <section
            style={{ width, height }}
            className={`${style.cardContainer} ${isFocus ? style.cardContainerFocus : ""}`}
        >
            <div className={style.cardPlaceholder}>
                <PlaceholderIcon />
            </div>
            <motion.div
                className={style.cardInnerContainer}
                initial={false}
                animate={{ rotateY: isFlipped ? 180 : 360 }}
                transition={{ duration: 0.3, animationDiraction: "normal" }}
                onAnimationComplete={onAnimationComplete}
            >
                {children}
            </motion.div>
        </section>
    );
};

export default Card;
