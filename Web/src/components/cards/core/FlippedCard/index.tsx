import React from "react";
import { FlippedCardProps } from "../../../../models/types/props/card";
import style from "./FlippedCard.module.css";
import { useAnimationContext } from "../../../../context/AnimationContext";
import { motion } from "framer-motion";
import { CardFace } from "../../../../models/enums/animation";
import Img from "../Img";
import Position from "../../shadow/Position";
import CardLayout from "../../../layout/CardLayout";

const FlippedCard: React.FC<FlippedCardProps> = ({
    id,
    card,
    position,
    front,
    back,
    onClick,
    size = "large",
}) => {
    const {
        id: movieId,
        movie: { title, poster_path },
    } = card;
    const { isFlipCard } = useAnimationContext();

    return (
        <CardLayout id={id} onClick={onClick} size={size}>
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
        </CardLayout>
    );
};

export default FlippedCard;
