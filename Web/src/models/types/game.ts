import { Card } from "../../../../Common/model/card";

export type FinishAnimation = {
    playAgainBtn: boolean;
    showCorrectPack: (Card | undefined)[];
    increaseScore: boolean;
    removePosition: boolean;
};
