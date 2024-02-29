import { DateDefaultJSON, SinglePlayerRoom } from "../models/constant";
import { ModOption } from "../models/enums/landing";
import { MovieFilters } from "../models/types/filter";
import { Game } from "../models/types/game";

export const initFilters = (year: any, genre: any, language: any) => {
    const filters: MovieFilters = {
        year: year ? JSON.parse(year) : DateDefaultJSON,
        genre: genre ? JSON.parse(genre) : [],
        language: language ? JSON.parse(language) : "",
    };
    return filters;
};

export const initGame = (
    rounds: any,
    roomId: string | undefined,
    filters: MovieFilters,
    mod: ModOption,
) => {
    const game: Game = {
        rounds: rounds ? parseInt(rounds) : 0,
        roomId: roomId || SinglePlayerRoom,
        filters,
        currentRound: 1,
        mod,
    };
    return game;
};
