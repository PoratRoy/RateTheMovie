import { MovieOMDB, MovieTMDB } from "../../models/types/movie";
import { CrewModel, Movie, VideoModel } from "../../../../Common/model/movie";
import URL from "../path.json";

export const setNewMovie = (tmdbMovie: MovieTMDB, resultsOMDB: MovieOMDB): Movie | undefined => {
    const { title, id, release_date, genre_ids, overview, poster_path } = tmdbMovie;
    const { imdbRating, imdbID } = resultsOMDB;

    if (title && id && poster_path && imdbRating) {
        const movie: Movie = {
            title,
            id: id.toString(),
            release_date,
            genre_ids,
            video: undefined,
            imdbRating,
            imdbID,
            poster_path: `${URL.image}${poster_path}`,
            description: overview,
            director: undefined,
            actors: [],
        };
        return movie;
    }
    return;
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
