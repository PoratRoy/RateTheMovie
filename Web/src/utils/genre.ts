import { Genres } from "../models/ganres";
import { MovieFilters } from "../models/types/movie";

export const getGenres = (arrayOfIds?: number[]): string[] => {
    let genresArray: string[] = [];
    if (arrayOfIds && arrayOfIds.length !== 0) {
        Genres.forEach((genre) => {
            if (arrayOfIds.includes(genre.id)) {
                genresArray.push(genre.name);
            }
        });
    }
    return genresArray;
};

export const isGenreValid = (genres_ids?: number[], filters?: MovieFilters): boolean => {
    let isValid: boolean = true;
    if(genres_ids?.length === 0) return isValid;

    if (filters && filters.genre && genres_ids) {
        filters.genre.forEach((filterGenre) => {            
            if (!genres_ids.includes(parseInt(filterGenre))) {
                isValid = false;
            }
        });
    }
    return isValid;
};
