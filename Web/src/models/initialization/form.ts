import { SetupInputs } from "../types/form";

export const setupInputs: SetupInputs = {
    name: {
        type: "text",
        id: "name",
        placeholder: "Enter Name",
    },
    rounds: {
        id: "rounds",
        type: "number",
    },
    avatar:{
        id: "avatar",
        type: "number",
    },
    genre: {
        id: "genre",
        placeholder: "All Genres",
        label: "Genres",
    },
    language: {
        id: "language",
        placeholder: "Select Native Language",
        label: "Native Language",
    },
    year: {
        id: "year",
        placeholder: "Select Release Years",
        label: "Release Year",
    },
};