import { Movie } from "../../models/types/movie";
import { Card } from "../../models/types/card";
import { sortMovies } from "../../utils/calc";
import { PACK_CARDS_NUM } from "../../models/constant";

const useCorrectOrder = () => {
    const sortMoviesOrder = (movies: Movie[]): string[] | undefined => {
        if (movies && movies.length === PACK_CARDS_NUM) {
            const sortedMovies = [...movies];
            sortedMovies.sort((a, b) => {
                return sortMovies(a, b);
            });
            const movieIds = sortedMovies.map(movie => movie.id);
            return movieIds;
        }
    };

    const sortCardsOrder = (cards: Card[]): string[] | undefined => {
        if (cards && cards.length === PACK_CARDS_NUM) {
            const sortedCards = [...cards];
    
            sortedCards.sort((a, b) => {
                return sortMovies(a.movie, b.movie);
            });
    
            const movieIds = sortedCards.map(card => card.movie.id);
            return movieIds;
        }
    };

    return { sortMoviesOrder, sortCardsOrder };
};

export default useCorrectOrder;
