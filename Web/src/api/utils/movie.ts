import { MovieTMDB } from "../../models/types/movie";
import { Movie } from "../../../../Common/model/movie";

export const checkMoviesAlreadySet = (movies: Movie[]): boolean =>
    movies.some((movie) => movie.title !== "" || movie.id !== "");

export const removeMovieFromRemaining = (remainingMovies: MovieTMDB[], movie: MovieTMDB) => {
    const index = remainingMovies.indexOf(movie);
    if (index !== -1) {
        remainingMovies.splice(index, 1);
    }
    return remainingMovies;
};
