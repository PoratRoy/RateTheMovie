import { useEffect, useState } from "react";
import { useGamePlayContext } from "../context/GamePlayContext";
import { Movie } from "../models/types/movie";
import { Card } from "../models/types/card";

const useCardOrderPosition = (movie: Movie) => {
    //TODO: I alredy have the player and can get it from the props
    const { players, finishAnimation } = useGamePlayContext();
    const [pos, setPos] = useState<number>(0);

    useEffect(() => {
        const selectedOrder = players[0]?.selectedCards;
        let match = false;
        if (selectedOrder && selectedOrder.length !== 0) {
            selectedOrder.forEach((card: Card | undefined) => {
                if (card) {
                    if (!match && card.movie?.imdbID) {
                        if (card.movie === movie) {
                            setPos(card.position + 1);
                            match = true;
                        }
                    }
                }
            });
        }
        if (!match) setPos(0);
    }, [players]);

    useEffect(() => {
        if (finishAnimation.removePosition) {
            const rightChoices = players[0]?.rightChoices;
            rightChoices.forEach((movieOption: Movie) => {
                if (movieOption === movie) {
                    setPos(0);
                }
            });
        }
    }, [finishAnimation]);

    return pos;
};

export default useCardOrderPosition;
