import { Card } from "../models/types/card";
import { Movie } from "../models/types/movie";
import { Player } from "../models/types/player";

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

export const getElectedMovie = (players: Player[], movie: Movie | undefined, index: number) => {
    if (movie) return movie;
    return players[0].electedCards.order[index]?.movie;
};
