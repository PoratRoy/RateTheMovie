import { MovieFilters } from "../../models/types/movie";

export const discoverQueryParams = (page: number, filters?: MovieFilters) => {
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

export const moviesQueryParams = { language: "en-US", api_key: import.meta.env.VITE_TMDB_API_KEY || "" };