import { Difficulty } from "./union";

export type Filters = {
    difficulty: Difficulty;
    type:
        | { byDifficulty: true }
        | { byGenre: string[] | undefined }
        | { byActor: ByActorFilter }
        | { byTopMovies: true };
};

export type ByDirectorFilter = {
    name: string;
};

export type ByActorFilter = {
    name: string;
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

