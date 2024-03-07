import { PACK_CARDS_NUM } from "../models/constant";
import { Card } from "../models/types/card";
import { Player } from "../models/types/player";
import { getElectedCardsFromCards } from "./card";

export const isFinishPlacingElectedCards = (player: Player): Card[] => {
    let cardsSelectedOrder: Card[] | undefined;
    const electedCardsOrder = player.electedCards.order;

    if (electedCardsOrder && electedCardsOrder.length === PACK_CARDS_NUM) {
        const cards: Card[] = getElectedCardsFromCards(electedCardsOrder);
        if (cards.length === PACK_CARDS_NUM) {
            cardsSelectedOrder = cards;
        }
    }

    return cardsSelectedOrder ? cardsSelectedOrder : [...Array(PACK_CARDS_NUM)];
};
