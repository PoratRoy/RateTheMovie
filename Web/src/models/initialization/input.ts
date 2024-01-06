import { DateDefaultJSON } from "../constants";
import { SelectInputSchema } from "../types/inputSchema";

export const initSelectDefaultValues: SelectInputSchema = {
    year: DateDefaultJSON,
    country: "",
    genre: "[]",
    players: "[]",
};