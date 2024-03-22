import { ModOption } from "../enums/landing";
import { Filters } from "./filter";

export type Game = {
    mod: ModOption; 
    roomId: string;
    filters: Filters;
    currentRound: number;
    rounds: number;
    shuffleAttempt: number;
    isStarted: boolean;
};
