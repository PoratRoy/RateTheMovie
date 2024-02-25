import { MovieFilters } from "./filter";
import { Movie } from "./movie";

export type Game = {
    roomId: string;
    filters: MovieFilters;
    currentRound: number;
    rounds: number;
};

export type FinishAnimation = {
    playAgainBtn: boolean;
    showCorrectPack: Movie[];
    increaseScore: boolean;
    removePosition: boolean;
};
