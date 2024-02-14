import { Movie } from "../models/types/movie";
import { Card } from "../models/types/card";
import { PACK_CARDS_NUM } from "../models/constants";
import { sortMovies } from "../utils/calc";

const useCorrectOrder = () => {
    const sortMoviesOrder = (movies: Movie[]): Movie[] | undefined => {
        if (movies && movies.length === PACK_CARDS_NUM) {
            const sortedMovies = [...movies];

            sortedMovies.sort((a, b) => {
                return sortMovies(a, b);
            });
            return sortedMovies;
        }
    };

    const sortCardsOrder = (cards: Card[]): Card[] | undefined => {
        if (cards && cards.length === PACK_CARDS_NUM) {
            const sortedCards = [...cards];

            sortedCards.sort((a, b) => {
                return sortMovies(a.movie, b.movie);
            });
            return sortedCards;
        }
    };

    return { sortMoviesOrder, sortCardsOrder };
};

export default useCorrectOrder;
