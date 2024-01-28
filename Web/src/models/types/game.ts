import { Card } from "./card";

export type FinishAnimation = {
    playAgainBtn: boolean;
    showCorrectPack: (Card | undefined)[];
};
