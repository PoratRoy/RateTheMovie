import { motion } from "framer-motion";
import useCardFlipAnimation from "../../../../hooks/useCardFlipAnimation";
import { CardInnerContainerProps } from "../../../../models/types/props";
import { CARD_ID } from "../../../../models/constants";
import style from "./Card.module.css";

const CardInnerContainer: React.FC<CardInnerContainerProps> = ({
    type,
    children,
    flip,
    isFocus,
}) => {
    const { isFlipped, onAnimationComplete } = useCardFlipAnimation(flip);
    const id = type === "Elected" ? CARD_ID : "";
    const isAnimate = type === "Player";
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
            <div
                id={id}
                className={`${style.cardInnerContainer} ${isFocus ? style.cardContainerFocus : ""}`}
            >
                {children}
            </div>
        );
    }
};

export default CardInnerContainer;
