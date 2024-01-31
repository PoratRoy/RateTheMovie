import { extractYearFromDate } from "../../utils/date";
import { OmdbBaseURL } from "../constants";
import { Movie, MovieOMDB, MovieTMDB } from "../../models/types/movie";
import { removeMovieFromRemaining, setNewMovie } from "../utils";
import { PACK_CARDS_NUM } from "../../models/constants";
import fetchOMDB from "../fetch/fetchOMDB";

const useGetMovieData = () => {
    const dataMovies = async (moviesTMDB: MovieTMDB[]): Promise<[Movie[], MovieTMDB[]]> => {
        let movies: Movie[] = [];
        let remainingMovies: MovieTMDB[] = [...moviesTMDB];

        for (const tmdbMovie of moviesTMDB) {
            const { title, release_date } = tmdbMovie;
            if (title && release_date) {
                const year = extractYearFromDate(release_date);
                const resultsOMDB: MovieOMDB = await fetchOMDB(OmdbBaseURL, title, year);

                const { imdbRating, Poster } = resultsOMDB;
                if (Poster && Poster !== "N/A" && imdbRating && imdbRating !== "N/A") {
                    const movie = setNewMovie(tmdbMovie, resultsOMDB);
                    if (movie) {
                        movies.push(movie);
                        remainingMovies = removeMovieFromRemaining(remainingMovies, tmdbMovie);
                    }
                }
                if (movies.length === PACK_CARDS_NUM) break;
            }
        }
        return [movies, remainingMovies];
    };

    return { dataMovies };
};

export default useGetMovieData;