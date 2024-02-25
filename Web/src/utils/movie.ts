import { Card } from "../models/types/card";
import { Movie } from "../models/types/movie";

export const filterMoviesById = (ids: string[], movies: Movie[]): Movie[] => {
    return movies.filter((movie) => ids.includes(movie.id));
};

export const getMoviesByCards = (electedCardsOrder: (Card | undefined)[]) => {
    let movies: Movie[] = [];
    electedCardsOrder.forEach((card: Card | undefined) => {
        if (card && card.id !== undefined) {
            movies.push(card.movie);
        }
    });
    return movies;
};

