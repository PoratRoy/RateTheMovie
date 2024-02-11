import { movieRating } from "../utils/format";
import { Movie } from "../models/types/movie";

const useCorrectOrder = () => {
    const sortMoviesPosition = (movies: Movie[]): number[] | undefined => {
        if (movies && movies.length !== 0) {
            const sortedMovies = [...movies];

            sortedMovies.sort((a, b) => {
                const votesA = movieRating(a.imdbRating);
                const votesB = movieRating(b.imdbRating);
                return votesA - votesB;
            });
            return sortedMovies?.map((movie) => movies.indexOf(movie));
        }
    };

    return { sortMoviesPosition };
};

export default useCorrectOrder;

// const moviesId = sortedMovies.map((movie) => movie.id);
//            Session.set(SessionKey.CORRECT_ORDER, moviesId);
