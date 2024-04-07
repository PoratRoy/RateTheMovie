import { SinglePlayerRoom } from "../models/constant";
import { ModOption } from "../models/enums/landing";
import { Filters } from "../models/types/filter";
import { Game } from "../models/types/game";
import { Difficulty } from "../models/types/union";

export const initFilters = (difficulty: Difficulty) => {
    const filters: Filters = {
        difficulty,
        type: { byDifficulty: true },
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
        mod,
        isGameStart: false,
        isRoundStart: false,
        isPlayerFinishRound: false,
        isRoundFinished: false,
        isGameOver: false,
        isRefreshed: false,
    };
    return game;
};
