import { PACK_CARDS_NUM } from "../constant";
import { Card } from "../types/card";
import { initMovie } from "./movie";

export const initGameCard: Card = {
    id: undefined,
    movie: initMovie,
    isCorrect: undefined,
};

export const initGameCardsList = (): Card[] => {
    let cards: Card[] = [];
    for (let i = 0; i < PACK_CARDS_NUM; i++) {
        cards.push(initGameCard);
    }
    return cards;
};
