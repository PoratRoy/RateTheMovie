import { MovieFilters } from "../models/types/filter";


export const isLanguageValid = (language?: string, filters?: MovieFilters): boolean => {
    let isValid: boolean = true;
    if (filters && filters.language && language && filters.language !== language) {
        isValid = false;
    }
    return isValid;
};
