import { initPlayer } from "../models/initialization/player";
import { MovieFilters } from "../models/types/movie";
import { Player } from "../models/types/player";

export const switchPlayers = (numberOfPlayers: number): Player[] => {
    let players: Player[] = [];
    for (let i = 0; i <= numberOfPlayers; i++) {
        players.push(initPlayer(i, ""));
    }
    return players;
};

export const isLanguageValid = (language?: string, filters?: MovieFilters): boolean => {
    let isValid: boolean = true;
    if (filters && filters.language && language && filters.language !== language) {
        isValid = false;
    }
    return isValid;
};
