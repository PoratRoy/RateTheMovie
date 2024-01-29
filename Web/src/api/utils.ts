import { Movie, MovieFilters, MovieOMDB, MovieTMDB } from "../models/types/movie";

export const setQueryParams = (page: number, filters?: MovieFilters) => {
    let release_date_gte = "";
    let release_date_lte = "";
    let genres = "";
    let with_origin_country = "";
    if (filters) {
        if (filters.year) {
            release_date_gte = `${filters.year[0]}-01-01`;
            release_date_lte = `${filters.year[1]}-12-29`;
        }
        if (filters.genre) {
            genres = filters.genre.join(",");
        }
        if (filters.country) {
            with_origin_country = filters.country;
        }
    }

    return {
        api_key: import.meta.env.VITE_TMDB_API_KEY || "",
        page,
        "release_date.gte": release_date_gte,
        "release_date.lte": release_date_lte,
        with_genres: genres,
        with_origin_country,
    };
};

export const setNewMovie = (tmdbMovie: MovieTMDB, resultsOMDB: MovieOMDB): Movie | undefined => {
    const { title, id, backdrop_path, release_date, genre_ids, adult, overview } = tmdbMovie;
    const { imdbRating, imdbVotes, Poster, Director, Website, imdbID, Actors } = resultsOMDB;

    if (title && id && Poster && Poster !== "N/A" && imdbRating && imdbRating !== "N/A") {
        // TODO: imdbRating !== "N/A" what shold I do?
        const movie: Movie = {
            title,
            id: id.toString(),
            backdrop_path,
            release_date,
            genre_ids,
            adult,
            video: "",
            imdbRating,
            imdbVotes,
            imdbID,
            poster_path: Poster,
            director: Director,
            website: Website,
            actors: Actors,
            description: overview,
        };
        return movie;
    }
    return;
};

export const checkMoviesAlreadySet = (movies: Movie[]): boolean =>
    movies.some((movie) => movie.title !== "" || movie.id !== "");

// export const getMoviesOptions = (movies: MovieTMDB[]): MovieTMDB[][] => {
//     const shuffledArray = movies.slice().sort(() => Math.random() - 0.5);

//     const moviesOptions = [];
//     for (let i = 0; i < MOVIES_OPTIONS; i++) {
//         const movies = shuffledArray.slice(i * PACK_CARDS_NUM, (i + 1) * PACK_CARDS_NUM);
//         moviesOptions.push(movies);
//     }

//     return moviesOptions;
// };
