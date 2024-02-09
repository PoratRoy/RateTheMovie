import { PACK_CARDS_NUM } from "../constants";
import { Movie } from "../../../../Common/model/movie";

//"https://m.media-amazon.com/images/M/MV5BNTlkZGZkOTktODZiZi00Yzc2LThlYTYtYzNkMDE3ZmE2ZWM1XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
export const initMovie: Movie = {
    title: "",
    id: "",
    poster_path: "",
    imdbRating: "",
    imdbID: undefined,
    genre_ids: [],
    release_date: undefined,
    video: undefined,
    actors: [],
    director: undefined,
    description: undefined,
};

export const initMovieList = (): Movie[] => {
    let movieList: Movie[] = [];
    for (let i = 0; i < PACK_CARDS_NUM; i++) {
        movieList.push(initMovie);
    }
    return movieList;
};
