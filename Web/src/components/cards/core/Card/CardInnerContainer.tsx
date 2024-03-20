import { motion } from "framer-motion";
import style from "./Card.module.css";
import { CARD_ID } from "../../../../models/constant";
import { CardInnerContainerProps } from "../../../../models/types/props/card";
import { useAnimationContext } from "../../../../context/AnimationContext";
import { PRIMARY_COLOR } from "../../../../style/root";

const CardInnerContainer: React.FC<CardInnerContainerProps> = ({
    type,
    children,
    isFocus,
    hasBorder = false,
}) => {
    const { isFlipCard } = useAnimationContext();
    const isElectedType = type.t === "Elected";

    if (isElectedType) {
        const className = type.hasDecoration
            ? `${style.electedCardInnerDecoration} ${isFocus ? style.cardContainerFocus : ""}`
            : style.electedCardInnerContainer; //TODOCSS: refactor

        return (
            <div
                id={CARD_ID}
                className={className}
                style={{ border: hasBorder ? `2px solid ${PRIMARY_COLOR}` : "none" }}
            >
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
