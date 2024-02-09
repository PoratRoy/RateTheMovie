import { Colors } from "../models/constants";
import { initPlayer } from "../models/initialization/player";
import { MovieFilters } from "../models/types/movie";
import { Player } from "../../../Common/model/player";
import { PlayerColor } from "../../../Common/model/union";

export const switchPlayers = (numberOfPlayers: number): Player[] => {
    let players: Player[] = [];
    for (let i = 0; i <= numberOfPlayers; i++) {
        players.push(initPlayer(i, Colors[i] as PlayerColor, ""));
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
