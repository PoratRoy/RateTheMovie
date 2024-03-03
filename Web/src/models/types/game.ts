import { ModOption } from "../enums/landing";
import { MovieFilters } from "./filter";
import { Movie } from "./movie";

export type Game = {
    mod: ModOption; 
    roomId: string;
    filters: MovieFilters;
    currentRound: number;
    rounds: number;
};

export type FinishAnimation = {
    nextRound: boolean;
    showCorrectPack: Movie[];
    increaseScore: boolean;
};
