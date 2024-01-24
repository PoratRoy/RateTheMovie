import { useEffect } from "react";
import { useGamePlayContext } from "../context/GamePlayContext";
import { useMovieContext } from "../context/MovieContext";
import { Card } from "../models/types/card";
import { Movie } from "../models/types/movie";
import Session from "../utils/sessionStorage";
import { SessionKey } from "../models/enums/session";

const useCorrectOrder = () => {
    const { setCorrectOrder } = useGamePlayContext();
    const { movies } = useMovieContext();

    useEffect(() => {
        if (movies && movies.length !== 0) {
            const sortedMovies = [...movies];

            sortedMovies.sort((a, b) => {
                const votesA = parseFloat(a.imdbRating || "0");
                const votesB = parseFloat(b.imdbRating || "0");
                return votesA - votesB;
            });

            const cards: Card[] = sortedMovies.map((movie: Movie, i: number) => {
                return { id: i.toString(), movie, rate: parseFloat(movie.imdbRating) } as Card;
            });
            Session.set(SessionKey.CORRECT_ORDER, cards)
            setCorrectOrder(cards);
        }
    }, [movies]);
};

export default useCorrectOrder;
