import { motion } from "framer-motion";
import style from "./Card.module.css";
import { CardInnerContainerProps } from "../../../../models/types/props/card";
import { useAnimationContext } from "../../../../context/AnimationContext";
import { PRIMARY_COLOR } from "../../../../style/root";
import { CARD_ID } from "../../../../models/constant/ids";
import { CardFace } from "../../../../models/enums/animation";

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
            : style.electedCardInnerContainer;

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
                animate={{ rotateY: isFlipCard || CardFace.BACK }}
                transition={{ duration: 0.3, animationDiraction: "normal" }}
            >
                {children}
            </motion.div>
        );
    }
};

export default CardInnerContainer;
