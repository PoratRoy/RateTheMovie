import { ModOption } from "../enum/mod";
import { MovieFilters } from "./filter";

export type Game = {
    mod: ModOption; 
    roomId: string;
    filters: MovieFilters;
    currentRound: number;
    rounds: number;
};