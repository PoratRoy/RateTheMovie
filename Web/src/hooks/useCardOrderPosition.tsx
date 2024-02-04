import { useEffect, useState } from "react";
import { useGamePlayContext } from "../context/GamePlayContext";
import { Movie } from "../models/types/movie";
import { PACK_CARDS_NUM } from "../models/constants";

const useCardOrderPosition = (movie: Movie) => {
    const { players, finishAnimation } = useGamePlayContext();
    const [pos, setPos] = useState<number>(0);

    useEffect(() => {
        const selectedOrder = players[0]?.selectedCards;
        let match = false;
        if (selectedOrder && selectedOrder.length !== 0) {
            selectedOrder.forEach((card, i) => {
                if (!match && card?.movie?.imdbID) {
                    if (card?.movie === movie) {
                        setPos(PACK_CARDS_NUM - i);
                        match = true;
                    }
                }
            });
        }
        if (!match) setPos(0);
    }, [players]);

    useEffect(() => {
        if (finishAnimation.removePosition) {
            const rightChoices = players[0]?.rightChoices;
            rightChoices.forEach((m: Movie) => {
                if (m === movie) {
                    setPos(0);
                }
            });
        }
    }, [finishAnimation]);

    return pos;
};

export default useCardOrderPosition;
