import { SHUFFLE_ATTEMPT, SinglePlayerRoom } from "../models/constant";
import { ModOption } from "../models/enums/landing";
import { Filters } from "../models/types/filter";
import { Game } from "../models/types/game";

export const initFilters = () => {
    // const filters: MovieFilters = {
    //     year: year ? JSON.parse(year) : DateDefaultJSON,
    //     genre: genre ? JSON.parse(genre) : [],
    //     language: language ? JSON.parse(language) : "",
    // };
    const filters: Filters = {
        difficulty: "easy",
        type: { byTopRated: true },
    };
    return filters;
};

export const initGame = (
    rounds: any,
    roomId: string | undefined,
    filters: Filters,
    mod: ModOption,
) => {
    const game: Game = {
        rounds: rounds ? parseInt(rounds) : 0,
        roomId: roomId || SinglePlayerRoom,
        filters,
        currentRound: 1,
        shuffleAttempt: SHUFFLE_ATTEMPT,
        mod,
        isStarted: false,
    };
    return game;
};
