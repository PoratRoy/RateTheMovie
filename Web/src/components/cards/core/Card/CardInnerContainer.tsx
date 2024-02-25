import { motion } from "framer-motion";
import useCardFlipAnimation from "../../../../hooks/animation/useCardFlipAnimation";
import style from "./Card.module.css";
import { CARD_ID } from "../../../../models/constant";
import { CardInnerContainerProps } from "../../../../models/types/props/card";

const CardInnerContainer: React.FC<CardInnerContainerProps> = ({
    type,
    children,
    flip,
    isFocus,
}) => {
    const { isFlipped, onAnimationComplete } = useCardFlipAnimation(flip);
    const isElectedType = type === "Elected";

    if (isElectedType) {
        return (
            <div
                id={CARD_ID}
                className={`${style.electedCardInnerContainer} ${
                    isFocus ? style.cardContainerFocus : ""
                }`}
            >
                {children}
            </div>
        );
    } else {
        return (
            <motion.div
                className={style.playerCardInnerContainer}
                initial={false}
                animate={{ rotateY: isFlipped ? 180 : 360 }}
                transition={{ duration: 0.3, animationDiraction: "normal" }}
                onAnimationComplete={onAnimationComplete}
            >
                {children}
            </motion.div>
        );
    }
};

export default CardInnerContainer;
