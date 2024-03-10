import { Card } from "../models/types/card";
import { Movie } from "../models/types/movie";

export const filterMoviesById = (ids: string[], movies: Movie[]): Movie[] => {
    return movies.filter((movie) => ids.includes(movie.id));
};

export const getMoviesFromCards = (cards: Card[]): Movie[] => {
    return cards.map((card) => card.movie);
};
