import { Movie, MovieFilters, MovieOMDB, MovieTMDB } from "../models/types/movie";

export const setQueryParams = (page: number, filters?: MovieFilters) => {
    let release_date_gte = "";
    let release_date_lte = "";
    let genres = "";
    let with_original_language = "";
    if (filters) {
        if (filters.year) {
            release_date_gte = `${filters.year[0]}-01-01`;
            release_date_lte = `${filters.year[1]}-12-29`;
        }
        if (filters.genre) {
            genres = filters.genre.join(",");
        }
        if (filters.language) {
            with_original_language = filters.language;
        }
    }

    return {
        api_key: import.meta.env.VITE_TMDB_API_KEY || "",
        page,
        "release_date.gte": release_date_gte,
        "release_date.lte": release_date_lte,
        with_genres: genres,
        with_original_language,
    };
};

export const setNewMovie = (tmdbMovie: MovieTMDB, resultsOMDB: MovieOMDB): Movie | undefined => {
    const { title, id, backdrop_path, release_date, genre_ids, adult, overview } = tmdbMovie;
    const { imdbRating, imdbVotes, Poster, Director, Website, imdbID, Actors } = resultsOMDB;

    if (title && id && Poster && imdbRating) {
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

export const removeMovieFromRemaining = (remainingMovies: MovieTMDB[], movie: MovieTMDB) => {
    const index = remainingMovies.indexOf(movie);
    if (index !== -1) {
        remainingMovies.splice(index, 1);
    }
    return remainingMovies;
};
