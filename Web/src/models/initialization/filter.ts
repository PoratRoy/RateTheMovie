import { Filters } from "../types/filter";
import { Difficulty } from "../types/union";

export const initFilters = (difficulty: Difficulty) => {
    //TODO: handle filters
    const filters: Filters = {
        difficulty,
        type: difficulty === "hard" ? { byDifficulty: true } : { byTopMovies: true },
    };
    return filters;
};
