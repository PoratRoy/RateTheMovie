import { motion } from "framer-motion";
import useCardFlipAnimation from "../../../../hooks/useCardFlipAnimation";
import { CardInnerContainerProps } from "../../../../models/types/props";
import { CARD_ID } from "../../../../models/constants";
import style from "./Card.module.css";

const CardInnerContainer: React.FC<CardInnerContainerProps> = ({
    children,
    flip,
    isAnimate,
    isFocus,
}) => {
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
            <div
                id={CARD_ID}
                className={`${style.cardInnerContainer} ${isFocus ? style.cardContainerFocus : ""}`}
            >
                {children}
            </div>
        );
    }
};

export default CardInnerContainer;
