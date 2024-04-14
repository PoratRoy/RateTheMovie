import { SessionKey } from "../models/enums/session";
import { Game } from "../models/types/game";
import { Movie } from "../models/types/movie";
import Session from "./storage/sessionStorage";

export const stateFromSession = <T>(obj: any, key: SessionKey): T | undefined => {
    if (!obj) {
        return Session.get(key) as T | undefined;
    }
};

export const moviesStateFromSession = (
    movies: Movie[] | undefined,
    game: Game | undefined,
    roundsMovies: Movie[][] | undefined,
): Movie[] | undefined => {
    if (!movies) {
        if (game && roundsMovies) {
            const movies: Movie[] = [];
            for (let i = 0; i < game.currentRound; i++) {
                movies.push(...roundsMovies[i]);
            }
            return movies;
        }
    }
};
