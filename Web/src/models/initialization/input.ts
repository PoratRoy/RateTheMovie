import { DefualtPlayerName } from "../constant";
import { SetupInputSchema } from "../types/inputSchema";

export const initSetupDefaultValues: SetupInputSchema = {
    name: DefualtPlayerName,
    avatar: "-1",
    rounds: "5",
    difficulty: "easy",
};
