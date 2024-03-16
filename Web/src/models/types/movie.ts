import { Difficulty, LanguageType } from "./union";

export type Movie = {
    title: string;
    id: string;
    poster_path: string;
    imdbRating: number;
    imdbID: string;
    difficulty: Difficulty;
    isBoxOffice: boolean;
    language: LanguageType;
    genre_ids: number[];
    release_date: number;
    description: string;
    video?: VideoModel;
    actors: CrewModel[];
    director?: CrewModel;
};

export type CrewModel = {
    name: string;
    img: string;
    job: string;
};

export type VideoModel = {
    url: string;
    title: string;
};
