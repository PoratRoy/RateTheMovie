import { CrewModel, Movie, MovieOMDB, MovieTMDB, VideoModel } from "../../models/types/movie";
import URL from "../path.json";

export const setNewMovie = (
    tmdbMovie: MovieTMDB,
    resultsOMDB: MovieOMDB,
    crew: [CrewModel[], CrewModel | undefined],
    video: VideoModel | undefined,
): Movie | undefined => {
    const { title, id, release_date, genre_ids, overview } = tmdbMovie;
    const { imdbRating, Poster, imdbID } = resultsOMDB;

    if (title && id && Poster && imdbRating) {
        const movie: Movie = {
            title,
            id: id.toString(),
            release_date,
            genre_ids,
            video,
            imdbRating,
            imdbID,
            poster_path: Poster,
            description: overview,
            director: crew[1],
            actors: crew[0],
        };
        return movie;
    }
    return;
};

export const setCrewModel = (name: string, keyImg: string, job: string) => {
    return { name, img: `${URL.image}${keyImg}`, job } as CrewModel;
};

export const setVideoModel = (url: string, title: string) => {
    return { url, title } as VideoModel;
};
