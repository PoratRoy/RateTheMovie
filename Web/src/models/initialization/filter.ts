import { Filters } from "../types/filter";
import { Difficulty } from "../types/union";

export const initFilters = (difficulty: Difficulty) => {
    const filters: Filters = {
        difficulty,
        type: { byTopMovies: true },
    };
    return filters;
};