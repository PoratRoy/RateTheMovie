import { PACK_CARDS_NUM, SHUFFLE_ATTEMPT } from "../models/constant";
import { Movie } from "../models/types/movie";
import { getRandomNumber } from "./calc";

export const splitMovies = (movies: Movie[]): Movie[][] => {
    const result: Movie[][] = [];
    for (let i = 0; i < movies.length; i += PACK_CARDS_NUM) {
        result.push(movies.slice(i, i + PACK_CARDS_NUM));
    }
    return result;
};

export const splitMoviesBackup = (movies: Movie[], rounds: any) => {
    const matrix = [];
    const setNum = parseInt(rounds) + SHUFFLE_ATTEMPT;

    for (let i = 0; i < setNum; i++) {
        const round = [];
        const selectedMovies = new Set();
        const addedRatings = new Set<number>();

        while (selectedMovies.size < PACK_CARDS_NUM) {
            const randomIndex = getRandomNumber(0, movies.length - 1);
            const selectedMovie = movies[randomIndex];
            if (!addedRatings.has(selectedMovie.imdbRating)) {
                round.push(selectedMovie);
                selectedMovies.add(selectedMovie);
                addedRatings.add(selectedMovie.imdbRating);
            }
        }

        matrix.push(round);
    }

    return matrix;
};
