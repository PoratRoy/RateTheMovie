import { DefualtPlayerName } from "../constant";
import { SetupInputSchema } from "../types/setup";

export const initSetupDefaultValues: SetupInputSchema = {
    name: DefualtPlayerName,
    avatar: "-1",
    rounds: "5",
    difficulty: "easy",
};
