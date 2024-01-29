import { useEffect, useState } from "react";
import { useGamePlayContext } from "../context/GamePlayContext";
import { placeholderCardType } from "../models/types/card";
import { Movie } from "../models/types/movie";

const useCardOrderPosition = (type: placeholderCardType) => {
    const { players, finishAnimation } = useGamePlayContext();
    const [pos, setPos] = useState<number>(0);
    const isTypePlayer = type.t === "Player";

    useEffect(() => {
        if (isTypePlayer) {
            const selectedOrder = players[0]?.selectedCards;
            const movie = type.movie;
            let match = false;
            if (selectedOrder && selectedOrder.length !== 0) {
                selectedOrder.forEach((card, i) => {
                    if (!match && card?.movie?.imdbID) {
                        if (card?.movie === movie) {
                            setPos(i + 1);
                            match = true;
                        }
                    }
                });
            }
            if (!match) setPos(0);
        }
    }, [players]);

    useEffect(() => {
        if (finishAnimation.removePosition) {
            if (isTypePlayer) {
                const movie = type.movie;
                const rightChoices = players[0]?.rightChoices;
                rightChoices.forEach((m: Movie) => {
                    if (m === movie) {
                        setPos(0);
                    }
                });
            }
        }
    }, [finishAnimation]);

    return pos;
};

export default useCardOrderPosition;
