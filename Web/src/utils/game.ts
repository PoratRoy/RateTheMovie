import { RoundAction } from "../models/types/union";

export const setRoundNum = (action: RoundAction, currentRound?: number) => {
    if (!currentRound) return 1;
    return action === "reset" ? 1 : action === "increase" ? currentRound + 1 : currentRound - 1;
};
