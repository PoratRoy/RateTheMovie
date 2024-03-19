import { validLanguages } from "../constant/languages";
import { MovieFilters } from "../types/filter";
import { LanguageType } from "../types/union";

export const isLanguageValid = (language?: string, filters?: MovieFilters): boolean => {
    let isValid: boolean = true;
    try {
        if (language && !validLanguages.includes(language as LanguageType)) {
            isValid = false;
        }
        if (filters && filters.language && language && filters.language !== language) {
            isValid = false;
        }
    } catch (error) {
        isValid = false;
    }
    return isValid;
};
