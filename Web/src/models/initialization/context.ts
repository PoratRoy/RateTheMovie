
import { PACK_CARDS_NUM } from "../constant";
import { FinishAnimation } from "../types/game";

export const initFinishAnimation: FinishAnimation = {
    showCorrectPack: [...Array(PACK_CARDS_NUM)],
    increaseScore: false,
};
