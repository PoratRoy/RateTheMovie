import { useEffect, useState } from "react";
import { useGamePlayContext } from "../../context/GamePlayContext";
import { Card } from "../../models/types/card";
import { Player } from "../../models/types/player";
import { handleOrderEqualCorrectOrder } from "../../utils/correctOrder";

const useCardOrderPosition = (player: Player, selectedCard: Card) => {
    const { finishAnimation, currentPlayer } = useGamePlayContext();
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

    useEffect(() => {
        if (finishAnimation.removePosition) {
            const movie = selectedCard.movie;
            for (let i = 0; i < player.electedCards.order.length; i++) {
                handleOrderEqualCorrectOrder(player, movie, i, () => setPos(0));
            }
        }
    }, [finishAnimation]);

    return pos;
};

export default useCardOrderPosition;
