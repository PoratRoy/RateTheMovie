import { ModOption } from "../enum/game";
import { MovieFilters } from "./filter";

export type Game = {
    mod: ModOption;
    roomId: string;
    filters: MovieFilters;
    currentRound: number;
    rounds: number;
    isGameStart: boolean;
    isRoundStart: boolean;
    isPlayerFinishRound: boolean;
    isRoundFinished: boolean;
    isRefreshed: boolean;
};
