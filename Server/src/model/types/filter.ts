import { Difficulty } from "./union";

export type MovieFilters = ByDetailsFilter;

export type CreateFilters = ByDetailsFilter;

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

export type Filters = {
    difficulty: Difficulty; // by popularity
    type:
        | { byDetails: ByDetailsFilter }
        | { byDirector: ByDirectorFilter }
        | { byActor: ByActorFilter }
        | { byBoxOffice: true }
        | { byTopRated: true}
        | { byNewRelease: true };
};
