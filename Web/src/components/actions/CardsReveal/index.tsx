import React, { useState } from "react";
import RevealOrderBtn from "../widgets/btn/RevealOrderBtn";
import Pack from "../../cards/core/Pack";
import { Movie } from "../../../models/types/movie";
import { motion } from "framer-motion";
import { springAnimation } from "../../../style/animation";
import { useGamePlayContext } from "../../../context/GamePlayContext";
import style from "./CardsReveal.module.css";
import Card from "../../cards/core/Card";
import { placeholderCardType } from "../../../models/types/card";
import { setElectedFrontCard } from "../../../utils/card";
import ElectedShadow from "../../cards/shadow/ElectedShadow";
import { BELOW_ID } from "../../../models/constant";
import Rate from "../../cards/core/Rate";

const CardsReveal: React.FC = () => {
    const [reveal, setReveal] = useState<boolean>(false);
    const showCorrectPack: Movie[] = [];
    const { currentPlayer } = useGamePlayContext();

    return (
        <section>
            <Pack>
                {currentPlayer &&
                    showCorrectPack.map((movie: Movie | undefined, index: number) => {
                        if (!movie) movie = currentPlayer.electedCards?.order[index]?.movie;
                        const rate = movie?.imdbRating || 0;
                        return (
                            <motion.span
                                key={movie?.id || index}
                                layout
                                transition={springAnimation}
                            >
                                <section className={style.electedWrapper}>
                                    <Card
                                        type={{ t: "Elected", index } as placeholderCardType}
                                        front={setElectedFrontCard(currentPlayer, movie)}
                                        size="small"
                                    />
                                    <ElectedShadow isRightChoice={true} />
                                    <Rate rate={rate} id={BELOW_ID} />
                                </section>
                            </motion.span>
                        );
                    })}
            </Pack>
            <RevealOrderBtn onClicked={() => {}} />
        </section>
    );
};

export default CardsReveal;
