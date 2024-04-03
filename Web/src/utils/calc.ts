import { DISCOVERD_MOVIES_NUM } from "../models/constant";
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

export const roundToOneDecimal = (value: number) => Math.round(value);

export const sortMovies = (a: Movie, b: Movie) => {
    const rateA = a.imdbRating;
    const rateB = b.imdbRating;
    return rateA - rateB;
};

export const sortPlayersByScore = (players: (Player | undefined)[]): Player[][] => {
    const groupedPlayers: Player[][] = [];
    const validPlayers = players.filter(player => player !== undefined) as Player[];

    validPlayers.sort((a, b) => b.score - a.score);
    validPlayers.forEach(player => {
        if (groupedPlayers.length === 0 || groupedPlayers[groupedPlayers.length - 1][0].score !== player.score) {
            // If the last group's score doesn't match the current player's score, start a new group
            groupedPlayers.push([player]);
        } else {
            // Otherwise, add the player to the last group
            groupedPlayers[groupedPlayers.length - 1].push(player);
        }
    });
    return groupedPlayers;
};
