import { Card } from "../models/types/card";
import { Movie } from "../models/types/movie";
import { Player } from "../models/types/player";
import { movieRating } from "./format";

export const handleOrderEqualCorrectOrder = (
    player: Player,
    movie: Movie | undefined,
    index: number,
    action: () => void,
) => {
    const [isValid, { electedCardsOrder, electedCardsCorrectOrder }] = isCardsOrdrValid(player);

    if (movie && isValid) {
        if (electedCardsOrder[index]?.movie === movie) {
            if (electedCardsCorrectOrder?.[index].movie === movie) {
                action();
            }
        }
    }
};

export const handlePlayerScore = (player: Player) => {
    const [isValid, { electedCardsOrder, electedCardsCorrectOrder }] = isCardsOrdrValid(player);
    let playerScore = 0;

    if (isValid) {
        for (let i = 0; i < electedCardsOrder.length; i++) {
            if (electedCardsOrder[i]?.movie === electedCardsCorrectOrder[i]?.movie) {
                playerScore += movieRating(electedCardsCorrectOrder[i].movie.imdbRating);
            }
        }
    }
    return playerScore;
};

export const correctAnswers = (player: Player) => {
    const { correctAnswers } = getCorrectOrderAndAnswers(player);
    return correctAnswers.length;
};

export const getCorrectOrder = (player: Player) => {
    const { moviesInCorrectOrder, correctAnswers } = getCorrectOrderAndAnswers(player);
    return { moviesInCorrectOrder, correctAnswers: correctAnswers.length };
};

const getCorrectOrderAndAnswers = (player: Player) => {
    const [isValid, { electedCardsOrder, electedCardsCorrectOrder }] = isCardsOrdrValid(player);
    let moviesInCorrectOrder: Movie[] = [];
    let correctAnswers: Card[] = [];

    if (isValid) {
        moviesInCorrectOrder = electedCardsCorrectOrder?.map((card: Card, i: number) => {
            if (card.id === electedCardsOrder[i]?.id) {
                correctAnswers.push(card);
            }
            return card.movie;
        });
    }
    return { moviesInCorrectOrder, correctAnswers };
};

const isCardsOrdrValid = (
    player: Player,
): [boolean, { electedCardsOrder: (Card | undefined)[]; electedCardsCorrectOrder: Card[] }] => {
    const electedCardsOrder = player.electedCards.order;
    const electedCardsCorrectOrder = player.electedCards.correctOrder;
    if (
        electedCardsCorrectOrder &&
        electedCardsOrder &&
        electedCardsOrder.length !== 0 &&
        electedCardsCorrectOrder.length !== 0 &&
        electedCardsOrder.length === electedCardsCorrectOrder.length
    ) {
        return [true, { electedCardsOrder, electedCardsCorrectOrder }];
    }
    return [false, { electedCardsOrder: [], electedCardsCorrectOrder: [] }];
};
