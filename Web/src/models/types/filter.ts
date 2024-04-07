import { Difficulty } from "./union";

export type DateRangeOptionFilter = { start?: number; end?: number };

export type Filters = {
    difficulty: Difficulty;
    type:
        | { byDifficulty: true }
        | { byGenre: string[] | undefined }
        | { byActor: ByActorFilter }
        | { byTopMovies: true };
};

export type ByDetailsFilter = {
    year?: [string, string];
    genre?: string[];
    language?: string;
};

export type ByDirectorFilter = {
    name: string;
};

export type ByActorFilter = {
    name: string;
};

export type MovieFilters = {
    year?: [string, string];
    genre?: string[];
    language?: string;
};

export type GenreOptionFilter = {
    id: number;
    name: string;
};

export type CountryOptionFilter = {
    name: string;
    emoji: string;
    image: string;
    iso_3166_1: string;
};

export type LanguageOptionFilter = {
    id: string;
    name: string;
    emoji: string;
};
