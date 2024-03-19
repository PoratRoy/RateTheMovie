import { motion } from "framer-motion";
import style from "./Card.module.css";
import { CARD_ID } from "../../../../models/constant";
import { CardInnerContainerProps } from "../../../../models/types/props/card";
import { useAnimationContext } from "../../../../context/AnimationContext";

const CardInnerContainer: React.FC<CardInnerContainerProps> = ({ type, children, isFocus }) => {
    const { isFlipCard } = useAnimationContext();
    const isElectedType = type.t === "Elected";

    //TODO: border not animated when result card
    if (isElectedType) {
        const className = type.hasDecoration
            ? `${style.electedCardInnerDecoration} ${isFocus ? style.cardContainerFocus : ""}`
            : style.electedCardInnerContainer; //TODOCSS: refactor

        return (
            <div id={CARD_ID} className={className}>
                {children}
            </div>
        );
    } else {
        return (
            <motion.div
                className={style.playerCardInnerContainer}
                initial={false}
                animate={{ rotateY: isFlipCard }}
                transition={{ duration: 0.3, animationDiraction: "normal" }}
            >
                {children}
            </motion.div>
        );
    }
};

export default CardInnerContainer;
