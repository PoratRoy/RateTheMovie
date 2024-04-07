import React from "react";
import { FlippedCardProps } from "../../../../models/types/props/card";
import style from "./FlippedCard.module.css";
import cardStyle from "../../../../style/CardStyle.module.css";
import { styleSize } from "../../../../style/style";
import { useAnimationContext } from "../../../../context/AnimationContext";
import { motion } from "framer-motion";
import { CardFace } from "../../../../models/enums/animation";
import Img from "../Img";
import Position from "../../shadow/Position";

const FlippedCard: React.FC<FlippedCardProps> = ({
    id,
    card,
    position,
    front,
    back,
    size = "large",
}) => {
    const {
        id: movieId,
        movie: { title, poster_path },
    } = card;
    const sizeClass = styleSize(cardStyle)[size];
    const { isFlipCard } = useAnimationContext();

    return (
        <section id={id} className={`${sizeClass} ${style.cardContainer}`}>
            <motion.div
                className={style.cardInnerContainer}
                initial={false}
                animate={{ rotateY: isFlipCard || CardFace.BACK }}
                transition={{ duration: 0.3, animationDiraction: "normal" }}
            >
                <div style={{ transform: "rotateY(180deg)" }}>
                    <Img isShadow alt={title} src={poster_path} />
                </div>
                <div className={style.cardFront}>{front}</div>
                <div className={style.cardBack}>{back}</div>
                {position ? <Position id={movieId} position={position} /> : null}
            </motion.div>
        </section>
    );
};

export default FlippedCard;
