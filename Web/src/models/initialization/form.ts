import { FilterInputs, MultiplayerInputs } from "../types/form";

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
