import { DateDefaultJSON, DefualtPlayerName } from "../constants";
import { SetupInputSchema } from "../types/inputSchema";

export const initSetupDefaultValues: SetupInputSchema = {
    name: DefualtPlayerName,
    avater: "-1",
    rounds: "5",
    year: DateDefaultJSON,
    language: "",
    genre: "[]",
};
