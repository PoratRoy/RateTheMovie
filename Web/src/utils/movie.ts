import { PACK_CARDS_NUM, SHUFFLE_TRIES } from "../models/constant";
import { Card } from "../models/types/card";
import { Movie } from "../models/types/movie";

export const getMoviesFromCards = (cards: Card[]): Movie[] => {
    return cards.map((card) => card.movie);
};

export const splitMovies = (movies: Movie[]): Movie[][] => {
    const result: Movie[][] = [];
    for (let i = 0; i < movies.length; i += PACK_CARDS_NUM) {
        result.push(movies.slice(i, i + PACK_CARDS_NUM));
    }
    return result;
}

export const splitMoviesBackup = (movies: Movie[], rounds: any) => {
    const matrix = [];
    const setNum = parseInt(rounds) + SHUFFLE_TRIES;
    
    for (let i = 0; i < setNum; i++) {
        const round = [];
        const selectedMovies = new Set();
        
        while (selectedMovies.size < PACK_CARDS_NUM) {
            const randomIndex = Math.floor(Math.random() * movies.length);
            const selectedMovie = movies[randomIndex];
            if (!selectedMovies.has(selectedMovie)) {
                round.push(selectedMovie);
                selectedMovies.add(selectedMovie);
            }
        }
        
        matrix.push(round);
    }
    
    return matrix;
}