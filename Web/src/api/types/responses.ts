import { Movie } from "../../models/types/movie";


export type GetMovieResponse = {
    movies: Movie[][];
    amount: number;
}