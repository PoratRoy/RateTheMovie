import { getRandomNumber } from "../../utils/calc";
import { DateDefaultJSON } from "../constants";
import { MultiplayerInputSchema, SelectInputSchema, SetupInputSchema } from "../types/inputSchema";

export const initSelectDefaultValues: SelectInputSchema = {
    year: DateDefaultJSON,
    language: "",
    genre: "[]",
};

export const initMultiDefaultValues: MultiplayerInputSchema = {
    name: "Player 1",
};

export const initSetupDefaultValues: SetupInputSchema = {
    name: "Player 1",
    avater: getRandomNumber(0, 10).toString(),
    rounds: "5",
    year: DateDefaultJSON,
    language: "",
    genre: "[]",
};
