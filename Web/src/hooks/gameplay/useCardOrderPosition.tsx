import { useEffect, useState } from "react";
import { useGamePlayContext } from "../../context/GamePlayContext";
import { Card } from "../../models/types/card";
import { Player } from "../../models/types/player";

const useCardOrderPosition = (player: Player, selectedCard: Card) => {
    const { currentPlayer } = useGamePlayContext();
    const [pos, setPos] = useState<number>(0);

    useEffect(() => {
        const electedCardsOrder = player.electedCards.order;
        let match = false;
        if (electedCardsOrder && electedCardsOrder.length !== 0) {
            electedCardsOrder.forEach((electedCard: Card | undefined, i: number) => {
                if (electedCard && electedCard.id === selectedCard.id) {
                    if (!match && electedCard.movie) {
                        setPos(i + 1);
                        match = true;
                    }
                }
            });
        }
        if (!match) setPos(0);
    }, [currentPlayer]);

    return pos;
};

export default useCardOrderPosition;
