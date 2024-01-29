import { useEffect, useState } from "react";
import { useGamePlayContext } from "../context/GamePlayContext";
import { placeholderCardType } from "../models/types/card";

const useCardOrderPosition = (type: placeholderCardType) => {
    const { players } = useGamePlayContext();
    const [pos, setPos] = useState<number>(0);

    useEffect(() => {
        if (type.t === "Player") {
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

    return pos;
};

export default useCardOrderPosition;
