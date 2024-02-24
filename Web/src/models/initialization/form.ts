import { FilterInputs, MultiplayerInputs, SetupInputs } from "../types/form";

export const filterInputs: FilterInputs = {
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

export const multiplayerInputs: MultiplayerInputs = {
    name: {
        id: "name",
        placeholder: "Enter Name",
        label: "Your name",
    },
};

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
    avater:{
        id: "avater",
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