import { DateDefaultJSON } from "../constants";
import { MultiplayerInputSchema, SetupInputSchema } from "../types/inputSchema";

export const initMultiDefaultValues: MultiplayerInputSchema = {
    name: "Player 1",
};

export const initSetupDefaultValues: SetupInputSchema = {
    name: "Player",
    avater: "-1",
    rounds: "5",
    year: DateDefaultJSON,
    language: "",
    genre: "[]",
};
