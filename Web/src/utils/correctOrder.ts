import { PACK_CARDS_NUM } from "../models/constant";
import { Card } from "../models/types/card";
import { Player } from "../models/types/player";

export const isCardsOrdrValid = (
    player: Player | undefined,
): [boolean, { electedCardsOrder: (Card | undefined)[]; electedCardsCorrectOrder: string[] }] => {
    if (player) {
        const electedCardsOrder = player.electedCards.order;
        const electedCardsCorrectOrder = player.electedCards.correctOrder;
        let isAllExist = checkAllCardsExist(electedCardsOrder);

        if (
            isAllExist &&
            electedCardsCorrectOrder &&
            electedCardsOrder &&
            electedCardsOrder.length === PACK_CARDS_NUM &&
            electedCardsCorrectOrder.length === PACK_CARDS_NUM &&
            electedCardsOrder.length === electedCardsCorrectOrder.length
        ) {
            return [true, { electedCardsOrder, electedCardsCorrectOrder }];
        }
    }
    return [false, { electedCardsOrder: [], electedCardsCorrectOrder: [] }];
};

export const checkAllCardsExist = (electedCardsOrder: (Card | undefined)[]) => {
    if(electedCardsOrder.length !== PACK_CARDS_NUM) return false;
    for (let i = 0; i < electedCardsOrder.length; i++) {
        if (!electedCardsOrder[i] || !electedCardsOrder[i]?.id || !electedCardsOrder[i]?.movie.title) {
            return false;
        }
    }
    return true;
};
