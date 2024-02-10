import { extractYearFromDate } from "../../utils/date";
import { Movie, MovieOMDB, MovieTMDB } from "../../models/types/movie";
import { PACK_CARDS_NUM } from "../../models/constants";
import fetchOMDB from "../fetch/fetchOMDB";
import { useErrorContext } from "../../context/ErrorContext";
import URL from "../path.json";
import { addMovieDetails, setNewMovie } from "../utils/init";
import { removeMovieFromRemaining } from "../utils/movie";
import getMovieCast from "../utils/getMovieCast";
import getMovieVideo from "../utils/getMovieVideo";

const useGetMovieData = () => {
    const { handleError } = useErrorContext();

    const getMovieRatingData = async (
        moviesTMDB: MovieTMDB[],
    ): Promise<[Movie[], MovieTMDB[]]> => {
        let movies: Movie[] = [];
        let remainingMovies: MovieTMDB[] = [...moviesTMDB];

        for (const tmdbMovie of moviesTMDB) {
            const { id, title, release_date, poster_path } = tmdbMovie;
            if (id && title && release_date && poster_path) {
                const year = extractYearFromDate(release_date);
                try {
                    const resultsOMDB: MovieOMDB = await fetchOMDB(URL.omdb, title, year);
                    const { imdbRating } = resultsOMDB;
                    //TODO: no duplicate rates
                    if (imdbRating && imdbRating !== "N/A") {
                        const movie = setNewMovie(tmdbMovie, resultsOMDB);
                        if (movie) {
                            movies.push(movie);
                        }
                    }
                    remainingMovies = removeMovieFromRemaining(remainingMovies, tmdbMovie);
                } catch (error) {
                    console.error(error);
                    handleError((error as Error).message || "Something went wrong");
                }

                if (movies.length === PACK_CARDS_NUM) break;
            }
        }
        return [movies, remainingMovies];
    };

    const getMovieViewData = async (remainingMovies: Movie[]): Promise<Movie[]> => {
        let movies: Movie[] = [];

        for (const movie of remainingMovies) {
            const { id } = movie;
            const crew = await getMovieCast(id);
            const video = await getMovieVideo(id);
            movies.push(addMovieDetails(movie, video, crew));
        }
        return movies;
    };

    return { getMovieRatingData, getMovieViewData };
};

export default useGetMovieData;
