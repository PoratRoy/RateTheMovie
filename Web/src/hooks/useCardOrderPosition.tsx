import { useEffect, useState } from "react";
import { useGamePlayContext } from "../context/GamePlayContext";
import { SelectedOrder } from "../models/types/player";
import { placeholderCardType } from "../models/types/card";

const useCardOrderPosition = (type: placeholderCardType) => {
    const { selectedOrder } = useGamePlayContext();
    const [pos, setPos] = useState<number>(0);

    useEffect(() => {
        if (type.t === "Player") {
            const movie = type.movie;
            selectedOrder.forEach((card: SelectedOrder | undefined, i: number) => {
                if(pos === i + 1 && card?.card === undefined ){
                    setPos(0)
                }
                else if (card && card.card?.movie === movie) {
                    setPos(i + 1);
                }
            });
        }
    }, [selectedOrder]);

    return pos;
};

export default useCardOrderPosition;
