import { SinglePlayerRoom } from "../constant";
import { ModOption } from "../enums/game";
import { Filters } from "../types/filter";
import { Game } from "../types/game";

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
