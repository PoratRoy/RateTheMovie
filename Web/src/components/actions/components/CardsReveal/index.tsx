import React, { useEffect, useState } from "react";
import RevealOrderBtn from "../../widgets/btn/RevealOrderBtn";
import { useGamePlayContext } from "../../../../context/GamePlayContext";
import { getCorrectOrder } from "../../../../utils/correctOrder";
import PackOfResult from "../../../cards/pack/PackOfResult";
import style from "./CardsReveal.module.css";
import { Card } from "../../../../models/types/card";
import { REVEAL_ACTION_ID } from "../../../../models/constant/ids";

const CardsReveal: React.FC = () => {
    const [revealCards, setRevealCards] = useState<Card[]>([]);
    const [isReveal, setIsReveal] = useState<boolean>(false);
    const { currentPlayer, correctOrder } = useGamePlayContext();
    const moviesInCorrectOrder = getCorrectOrder(currentPlayer);

    useEffect(() => {
        if (revealCards.length === 0) {
            setRevealCards(correctOrder);
        }
    }, [revealCards, correctOrder]);

    const handleReveal = () => {
        if (isReveal) {
            setRevealCards(correctOrder);
        } else {
            setRevealCards(moviesInCorrectOrder);
        }
        setIsReveal((prev) => !prev);
    };

    return (
        <section className={style.cardsReveal} id={REVEAL_ACTION_ID}>
            <PackOfResult revealCards={revealCards} currentPlayer={currentPlayer} />
            <RevealOrderBtn onClicked={handleReveal} />
        </section>
    );
};

export default CardsReveal;
