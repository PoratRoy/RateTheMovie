import { PACK_CARDS_NUM } from "../constant";
import { CardAnimation } from "../enums/animation";
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

export const cardAnimation_all = [
    CardAnimation.TITLE,
    CardAnimation.DOUBLE_CLICK,
    CardAnimation.DRAGGING,
];
export const cardAnimation_title_click = [
    CardAnimation.TITLE,
    CardAnimation.DOUBLE_CLICK,
];
export const cardAnimation_title_drag = [
    CardAnimation.TITLE,
    CardAnimation.DRAGGING,
];
export const cardAnimation_title = [
    CardAnimation.TITLE,
];
export const cardAnimation_click = [
    CardAnimation.DOUBLE_CLICK,
];
export const cardAnimation_drag = [
    CardAnimation.DRAGGING,
];
