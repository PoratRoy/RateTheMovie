import { CrewModel, Movie, VideoModel } from "../model/types/movie";
import URL from "../model/constant/path.json";
import { Difficulty, LanguageType } from "../model/types/union";

export const setNewMovie = (
    title: string,
    id: number,
    poster_path: string,
    imdbRating: string,
    imdbID: string,
    difficulty: Difficulty,
    isBoxOffice: boolean,
    language: string,
    genre_ids: number[],
    release_date: string,
    overview: string,
    video: VideoModel | undefined,
    director: CrewModel | undefined,
    actors: CrewModel[],
): Movie => {
    const movie: Movie = {
        title,
        id: id.toString(),
        poster_path: `${URL.image}${poster_path}`,
        imdbRating: parseFloat(imdbRating),
        imdbID,
        difficulty,
        isBoxOffice,
        language: language as LanguageType,
        genre_ids: genre_ids || [],
        release_date: parseInt(release_date),
        description: overview,
        video,
        actors,
        director,
    };
    return movie;
};

export const addMovieDetails = (
    movie: Movie,
    video: VideoModel | undefined,
    crew: [CrewModel[], CrewModel | undefined],
) => {
    const [actors, director] = crew;
    return {
        ...movie,
        video,
        actors,
        director,
    } as Movie;
};

export const setCrewModel = (name: string, keyImg: string, job: string) => {
    return { name, img: `${URL.image}${keyImg}`, job } as CrewModel;
};

export const setVideoModel = (url: string, title: string) => {
    return { url, title } as VideoModel;
};
