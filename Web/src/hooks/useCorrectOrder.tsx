import { useGamePlayContext } from "../context/GamePlayContext";
import Session from "../utils/sessionStorage";
import { SessionKey } from "../models/enums/session";
import { movieRating } from "../utils/format";
import { Movie } from "../models/types/movie";

const useCorrectOrder = () => {
    const { setCorrectOrder } = useGamePlayContext();

    const correctOrder = (movies: Movie[]) => {
        if (movies && movies.length !== 0) {
            const sortedMovies = [...movies];

            sortedMovies.sort((a, b) => {
                const votesA = movieRating(a.imdbRating);
                const votesB = movieRating(b.imdbRating);
                return votesA - votesB;
            });

            const moviesId = sortedMovies.map((movie) => movie.id);
            Session.set(SessionKey.CORRECT_ORDER, moviesId);
            setCorrectOrder(moviesId);
        }
    };

    return { correctOrder };
};

export default useCorrectOrder;
