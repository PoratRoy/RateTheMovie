import { PACK_CARDS_NUM } from "../models/constants";
import { Card } from "../models/types/card";
import { Player } from "../models/types/player";

export const isFinishPlacingElectedpCards = (players: Player[]) => {
    players.forEach((player: Player) => {
        const selectedCards = player.selectedCards;

        if (selectedCards && selectedCards.length === PACK_CARDS_NUM) {
            let ids: string[] = [];
            selectedCards.forEach((card: Card | undefined) => {
                if (card && card.id !== undefined) {
                    ids.push(card.id);
                }
            });
            if (ids.length === PACK_CARDS_NUM) {
                return selectedCards;
            }
        }
    });
    return undefined;
};
