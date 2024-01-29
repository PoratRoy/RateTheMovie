import { Genres } from "../models/ganres";

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
