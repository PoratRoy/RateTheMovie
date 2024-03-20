import { PACK_CARDS_NUM } from "../models/constant";
import { Card } from "../models/types/card";
import { Player } from "../models/types/player";


export const getCorrectOrder = (player: Player | undefined) => {
    //TODO: if (!player) return [];  is it ok?
    if (!player) return [];
    const [isValid, { electedCardsOrder, electedCardsCorrectOrder }] = isCardsOrdrValid(player);
    let moviesInCorrectOrder: Card[] = [];
    if (isValid) {
        electedCardsCorrectOrder?.map((id: string) => {
            const card = electedCardsOrder.find((card) => card?.id === id);
            if(card){
                moviesInCorrectOrder.push(card);
            }
        });
    }
    return moviesInCorrectOrder;
};

/**
 * Checks if the elected cards order for a given player is valid.
 *
 * @param player The player object containing information about elected cards.
 * @returns A tuple indicating whether the order is valid and providing the current and correct order of elected cards.
 */
export const isCardsOrdrValid = (
    player: Player | undefined,
): [boolean, { electedCardsOrder: (Card | undefined)[]; electedCardsCorrectOrder: string[] }] => {
    if (player) {
        const electedCardsOrder = player.electedCards.order;
        const electedCardsCorrectOrder = player.electedCards.correctOrder;
        if (
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
