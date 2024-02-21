import { Movie } from "./movie";

export type FinishAnimation = {
    playAgainBtn: boolean;
    showCorrectPack: Movie[];
    increaseScore: boolean;
    removePosition: boolean;
};
