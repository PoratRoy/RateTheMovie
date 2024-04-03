import { PACK_CARDS_NUM } from "../models/constant";
import { Movie } from "../models/types/movie";
import { getRandomNumber } from "./calc";

export const splitMovies = (movies: Movie[]): Movie[][] => {
    const result: Movie[][] = [];
    for (let i = 0; i < movies.length; i += PACK_CARDS_NUM) {
        result.push(movies.slice(i, i + PACK_CARDS_NUM));
    }
    return result;
};

export const splitRoundsMovies = (movies: Movie[], totalMovies: number, rounds: any) => {
    const matrix = [];

    if (movies.length < totalMovies) {
        for (let i = 0; i < parseInt(rounds); i++) {
            let roundMovies = movies.slice(i * PACK_CARDS_NUM, (i + 1) * PACK_CARDS_NUM);
            if (roundMovies.length === PACK_CARDS_NUM) {
                matrix.push(roundMovies);
            } else {
                const left = PACK_CARDS_NUM - roundMovies.length;
                const round = [];
                const selectedMovies = new Set();
                const addedRatings = new Set<number>();

                while (selectedMovies.size < left) {
                    const randomIndex = getRandomNumber(0, movies.length - 1);
                    const selectedMovie = movies[randomIndex];
                    if (!addedRatings.has(selectedMovie.imdbRating)) {
                        round.push(selectedMovie);
                        selectedMovies.add(selectedMovie);
                        addedRatings.add(selectedMovie.imdbRating);
                    }
                }
                matrix.push([...roundMovies, ...round]);
            }
        }
    } else {
        for (let i = 0; i < parseInt(rounds); i++) {
            let roundMovies = movies.slice(i * PACK_CARDS_NUM, (i + 1) * PACK_CARDS_NUM);
            matrix.push(roundMovies);
        }
    }
    return matrix;
}
