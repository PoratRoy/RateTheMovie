import { PACK_CARDS_NUM } from "../models/constant";
import { Movie } from "../models/types/movie";

export const splitMovies = (movies: Movie[]): Movie[][] => {
    const result: Movie[][] = [];
    for (let i = 0; i < movies.length; i += PACK_CARDS_NUM) {
        result.push(movies.slice(i, i + PACK_CARDS_NUM));
    }
    return result;
};
