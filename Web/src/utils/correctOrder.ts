import { Card } from "../models/types/card";
import { Movie } from "../models/types/movie";
import { Player } from "../models/types/player";

/**
 * Handles the case where the movie at a specific index in the elected cards order matches the provided movie
 * and the elected cards order is valid.
 * 
 * @param player The player object containing information about elected cards.
 * @param movie The movie to compare with the elected cards at the given index.
 * @param index The index of the elected cards to compare.
 * @param callback A callback function to execute if the movie at the given index matches the provided movie.
 */
export const handleOrderEqualCorrectOrder = (
    player: Player,
    movie: Movie | undefined,
    index: number,
    callback: () => void,
) => {
    const [isValid, { electedCardsOrder, electedCardsCorrectOrder }] = isCardsOrdrValid(player);

    if (movie && isValid) {
        if (electedCardsOrder[index]?.movie === movie) {
            if (electedCardsCorrectOrder?.[index].movie === movie) {
                callback();
            }
        }
    }
};

/**
 * Calculates the player's score based on the correctness of their elected cards' order.
 * Each correctly placed movie adds 100 points to the player's score.
 * 
 * @param player The player object containing information about elected cards.
 * @returns The calculated score for the player.
 */
export const handlePlayerScore = (player: Player) => {
    const [isValid, { electedCardsOrder, electedCardsCorrectOrder }] = isCardsOrdrValid(player);
    let playerScore = 0;

    if (isValid) {
        for (let i = 0; i < electedCardsOrder.length; i++) {
            if (electedCardsOrder[i]?.movie === electedCardsCorrectOrder[i]?.movie) {
                playerScore += 100;
            }
        }
    }
    return playerScore;
};

export const correctAnswers = (player: Player | undefined) => {
    if(!player) return 0;
    const { correctAnswers } = getCorrectOrderAndAnswers(player);
    return correctAnswers.length;
};

export const getCorrectOrder = (player: Player | undefined) => {
    if(!player) return { moviesInCorrectOrder: [], correctAnswers: 0 };
    const { moviesInCorrectOrder, correctAnswers } = getCorrectOrderAndAnswers(player);
    return { moviesInCorrectOrder, correctAnswers: correctAnswers.length };
};

/**
 * Retrieves the correct order of movies and correct answers based on the elected cards' order for a given player.
 * 
 * @param player The player object containing information about elected cards.
 * @returns An object containing the movies in correct order and the correct answers.
 */
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

/**
 * Checks if the elected cards order for a given player is valid.
 * 
 * @param player The player object containing information about elected cards.
 * @returns A tuple indicating whether the order is valid and providing the current and correct order of elected cards.
 */
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
