import { GameCard } from "../../models/types/card";
import { MovieTMDB } from "../../models/types/movie";

export const checkMoviesAlreadySet = (cards: GameCard[]): boolean =>
    cards.some((card) => card.movie.title !== "" || card.movie.id !== "");

export const removeMovieFromRemaining = (remainingMovies: MovieTMDB[], movie: MovieTMDB) => {
    const index = remainingMovies.indexOf(movie);
    if (index !== -1) {
        remainingMovies.splice(index, 1);
    }
    return remainingMovies;
};
