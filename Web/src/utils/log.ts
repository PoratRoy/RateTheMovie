import { PACK_CARDS_NUM } from "../models/constant";
import { Movie } from "../models/types/movie";

export const logMovies = (movies: Movie[]) => console.info(`Set ${PACK_CARDS_NUM} movies: `, movies);

export const logSocketConnection = () => console.info("Connected to server!");

export const logError = (error: any) => console.log("Connection error:", error)