import { PACK_CARDS_NUM } from "../models/constants";
import { Card } from "../models/types/card";
import { Player } from "../models/types/player";

export const isFinishPlacingElectedCards = (players: Player[]) => {
    const moviesSelectedOrder: (string[] | undefined)[] = players.map((player: Player) => {
        const selectedCards = player.selectedCards;

        if (selectedCards && selectedCards.length === PACK_CARDS_NUM) {
            let moviesId: string[] = [];
            selectedCards.forEach((card: Card | undefined) => {
                if (card && card.id !== undefined) {
                    moviesId.push(card.id);
                }
            });
            if (moviesId.length === PACK_CARDS_NUM) {
                return moviesId;
            }
        }
    });
    return moviesSelectedOrder[0] ? moviesSelectedOrder[0] : [...Array(PACK_CARDS_NUM)];
};
