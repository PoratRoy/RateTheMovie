import { PACK_CARDS_NUM } from "../constants";
import { Movie } from "../types/movie";

export const initMovie: Movie = {
    title: "",
    id: "",
    poster_path: "",
    imdbRating: "",
    imdbVotes: undefined,
    imdbID: undefined,
    adult: false,
    backdrop_path: undefined,
    genre_ids: [],
    release_date: undefined,
    video: undefined,
    actors: undefined,
    director: undefined,
    website: undefined,
};

export const initMovieList = (): Movie[] => {
    let movieList: Movie[] = [];
    for (let i = 0; i < PACK_CARDS_NUM; i++) {
        movieList.push(initMovie);
    }
    return movieList;
};
