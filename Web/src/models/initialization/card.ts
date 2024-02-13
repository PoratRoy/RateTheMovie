import { PACK_CARDS_NUM } from "../constants";
import { GameCard, PlayerCard } from "../types/card";
import { initMovie } from "./movie";

export const initGameCard: GameCard = {
    id: undefined,
    movie: initMovie,
    position: -1,
    correctPosition: -1,
};

export const initPlayerCard: PlayerCard = {
    movie: initMovie,
    correct: false,
};

export const initGameCardsList = (): GameCard[] => {
    let cards: GameCard[] = [];
    for (let i = 0; i < PACK_CARDS_NUM; i++) {
        cards.push(initGameCard);
    }
    return cards;
};
