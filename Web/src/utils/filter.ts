import { Filters } from "../models/types/filter";
import { Difficulty } from "../models/types/union";

export const initFilters = (difficulty: Difficulty) => {
    const filters: Filters = {
        difficulty,
        type: { byDifficulty: true },
    };
    return filters;
};
