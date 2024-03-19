import { CreateFilters } from "../types/filter";
import { isDateVaild } from "./date";
import { isGenreValid } from "./genre";
import { isLanguageValid } from "./language";

export const validation = (
    filters: CreateFilters,
    release_date?: string,
    genre_ids?: number[],
    original_language?: string,
) => {
    const isValidDate = isDateVaild(release_date, filters);
    const isValidGenre = isGenreValid(genre_ids, filters);
    const isValidLanguage = isLanguageValid(original_language, filters);

    if (isValidDate && isValidGenre && isValidLanguage) return true;
    return false;
};
