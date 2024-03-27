import { useGamePlayContext } from "../../context/GamePlayContext";
import { PACK_CARDS_NUM } from "../../models/constant";
import { Card } from "../../models/types/card";
import { Player } from "../../models/types/player";

const usePlaceCard = () => {
    const { setCurrentPlayer } = useGamePlayContext();
    //TODO: disable option if round finished (like dnd)
    const handlePlaceCard = (card: Card) => {
        setCurrentPlayer((prev) => {
            const currentPlayer = { ...prev } as Player | undefined;
            if (!currentPlayer) return currentPlayer;

            const electedCardsOrder = currentPlayer.electedCards?.order;
            const cardPlaceIndex = electedCardsOrder.findIndex((c) => c?.movie === card?.movie);

            if (cardPlaceIndex === -1) {
                for (let i = PACK_CARDS_NUM - 1; i >= 0; i--) {
                    const existingCard = electedCardsOrder[i];
                    if (!existingCard || existingCard.id === undefined) {
                        electedCardsOrder[i] = card;
                        break;
                    }
                }
            }
            return currentPlayer;
        });
    };

    return { handlePlaceCard };
};

export default usePlaceCard;
