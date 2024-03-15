import { MovieFilters } from "../types/filter";

export const isGenreValid = (genres_ids?: number[], filters?: MovieFilters): boolean => {
    let isValid: boolean = true;
    if (genres_ids?.length === 0) return isValid;

    if (filters && filters.genre && genres_ids) {
        filters.genre.forEach((filterGenre) => {
            if (!genres_ids.includes(parseInt(filterGenre))) {
                isValid = false;
            }
        });
    }
    return isValid;
};
