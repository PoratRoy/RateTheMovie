import MovieDatabaseService from "../database/MovieTable";
import { PACK_CARDS_NUM } from "../model/constant";
import { IMovie } from "../model/interfaces/scheme";
import { Filters } from "../model/types/filter";

export const getDBmovies = async (filters: Filters, amount: number): Promise<IMovie[]> => {
    const { type, difficulty } = filters;
    let DBmovies: IMovie[] | null = null;

    if ("byDetails" in type) {
        DBmovies = await MovieDatabaseService.getMoviesByDetails(
            amount,
            difficulty,
            type.byDetails,
        );
    } else if ("byDirector" in type) {
        DBmovies = await MovieDatabaseService.getMoviesByDirector(amount, type.byDirector);
    } else if ("byActor" in type) {
        DBmovies = await MovieDatabaseService.getMoviesByActor(amount, type.byActor);
    } else if ("byBoxOffice" in type) {
        DBmovies = await MovieDatabaseService.getMoviesByBoxOffice(amount, difficulty);
    } else if ("byTopRated" in type) {
        DBmovies = await MovieDatabaseService.getMoviesByTopRated(amount, difficulty);
    } else if ("byNewRelease" in type) {
        DBmovies = await MovieDatabaseService.getMoviesByNewRelease(amount, difficulty);
    }
    const movies: IMovie[] = DBmovies ? [...DBmovies] : [];
    return movies;
};

export const splitRoundsMovies = async (movies: IMovie[], filters: Filters, rounds: number) => {
    const matrix = [];

    for (let i = 0; i < rounds; i++) {
        let roundMovies = movies.slice(i * PACK_CARDS_NUM, (i + 1) * PACK_CARDS_NUM);
        let resultMovies: IMovie[] = [];
        const rates = new Set<number>();

        for (const movie of roundMovies) {
            const rate = movie.imdbRating;
            if (!rates.has(rate)) {
                rates.add(rate);
                resultMovies.push(movie);
            } else {
                const newMovie = await findMovieWithUniqueRating(filters, rates);
                resultMovies.push(newMovie);
                rates.add(newMovie.imdbRating);
            }
        }
        matrix.push(resultMovies);
    }
    return matrix;
};

const findMovieWithUniqueRating = async (filters: Filters, rates: Set<number>): Promise<IMovie> => {
    while (true) {
        const movies: IMovie[] = await getDBmovies(filters, 1);
        const movie = movies[0];
        if (movie && !rates.has(movie.imdbRating)) {
            return movie;
        }
    }
};
