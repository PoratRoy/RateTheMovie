import { useGamePlayContext } from "../context/GamePlayContext";
import { Card } from "../../../Common/model/card";
import { Movie } from "../../../Common/model/movie";
import Session from "../utils/sessionStorage";
import { SessionKey } from "../models/enums/session";
import { movieRating } from "../utils/format";

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

            const cards: Card[] = sortedMovies.map((movie: Movie, i: number) => {
                return { id: i.toString(), movie, rate: parseFloat(movie.imdbRating) } as Card;
            });
            Session.set(SessionKey.CORRECT_ORDER, cards);
            setCorrectOrder(cards);
        }
    };

    return { correctOrder };
};

export default useCorrectOrder;
