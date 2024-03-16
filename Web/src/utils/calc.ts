import { DISCOVERD_MOVIES_NUM, PACK_CARDS_NUM, SHUFFLE_TRIES } from "../models/constant";
import { Movie } from "../models/types/movie";
import { Player } from "../models/types/player";

export const getRandomNumber = (min: number = 1, max: number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const generateRandomArray = (length: number = DISCOVERD_MOVIES_NUM): number[] => {
    const array = Array.from({ length: length }, (_, index) => index);

    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }

    return array;
};

export const sortNumbers = (numbers: number[]): number[] => {
    const sortedArray = [...numbers];
    sortedArray.sort((a, b) => {
        return a - b;
    });
    return sortedArray;
};

export const roundToOneDecimal = (value: number) => Math.round(value * 10) / 10;

export const sortMovies = (a: Movie, b: Movie) => {
    const rateA = a.imdbRating;
    const rateB = b.imdbRating;
    return rateA - rateB;
};

export const sortPlayersByScore = (players: Player[]): Player[] => {
    return players.slice().sort((playerA, playerB) => playerB.score - playerA.score);
};

export const culcNumOfMovies = (rounds: number) => {
    return (rounds * PACK_CARDS_NUM) + (SHUFFLE_TRIES * PACK_CARDS_NUM);
};
