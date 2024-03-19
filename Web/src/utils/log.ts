import { PACK_CARDS_NUM } from "../models/constant";
import { Movie } from "../models/types/movie";

export const logMovies = (movies: Movie[]) => console.log(`Set ${PACK_CARDS_NUM} movies: `, movies);