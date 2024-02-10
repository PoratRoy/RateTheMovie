import { Movie } from "../models/types/movie";

export const filterMoviesById = (ids: string[], movies: Movie[]): Movie[] => {
    return movies.filter((movie) => ids.includes(movie.id));
};

export const findMovieById = (id: string, movies: Movie[]): Movie | undefined => {
    return movies.find((movie) => movie.id === id);
}