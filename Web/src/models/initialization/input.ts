import { DateDefaultJSON } from "../constants";
import { MultiplayerInputSchema, SelectInputSchema } from "../types/inputSchema";

export const initSelectDefaultValues: SelectInputSchema = {
    year: DateDefaultJSON,
    language: "",
    genre: "[]",
};

export const initMultiDefaultValues: MultiplayerInputSchema = {
    name: "",
};