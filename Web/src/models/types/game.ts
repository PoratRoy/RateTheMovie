import { ModOption } from "../enums/landing";
import { Card } from "./card";
import { MovieFilters } from "./filter";

export type Game = {
    mod: ModOption; 
    roomId: string;
    filters: MovieFilters;
    currentRound: number;
    rounds: number;
};

export type FinishAnimation = {
    showCorrectPack: Card[];
    increaseScore: boolean;
};
