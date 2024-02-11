import { GameCard } from "../models/types/card";
import { Movie } from "../models/types/movie";

export const filterMoviesById = (ids: string[], movies: Movie[]): Movie[] => {
    return movies.filter((movie) => ids.includes(movie.id));
};

export const findMovieById = (id: string, cards: GameCard[]): Movie | undefined =>
    cards.find((card) => card.id === id)?.movie;
