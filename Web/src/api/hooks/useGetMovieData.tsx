import { extractYearFromDate } from "../../utils/date";
import { Movie, MovieOMDB, MovieTMDB } from "../../models/types/movie";
import { PACK_CARDS_NUM } from "../../models/constants";
import fetchOMDB from "../fetch/fetchOMDB";
import { useErrorContext } from "../../context/ErrorContext";
import URL from "../path.json";
import { setNewMovie } from "../utils/init";
import { removeMovieFromRemaining } from "../utils/movie";
import getMovieCast from "../utils/getMovieCast";
import getMovieVideo from "../utils/getMovieVideo";

const useGetMovieData = () => {
    const { handleError } = useErrorContext();

    const dataMovies = async (moviesTMDB: MovieTMDB[]): Promise<[Movie[], MovieTMDB[]]> => {
        let movies: Movie[] = [];
        let remainingMovies: MovieTMDB[] = [...moviesTMDB];

        for (const tmdbMovie of moviesTMDB) {
            const { id, title, release_date } = tmdbMovie;
            if (id && title && release_date) {
                const year = extractYearFromDate(release_date);
                try {
                    const resultsOMDB: MovieOMDB = await fetchOMDB(URL.omdb, title, year);
                    const { imdbRating, Poster } = resultsOMDB;
                    //TODO: no duplicate rates
                    if (Poster && Poster !== "N/A" && imdbRating && imdbRating !== "N/A") {
                        const crew = await getMovieCast(tmdbMovie.id);   
                        const video = await getMovieVideo(tmdbMovie.id);                
                        const movie = setNewMovie(tmdbMovie, resultsOMDB, crew, video);
                        if (movie) {
                            movies.push(movie);
                        }
                    }
                    remainingMovies = removeMovieFromRemaining(remainingMovies, tmdbMovie);
                } catch (error) {
                    console.error(error)
                    handleError((error as Error).message || "Something went wrong");
                }

                if (movies.length === PACK_CARDS_NUM) break;
            }
        }
        return [movies, remainingMovies];
    };

    return { dataMovies };
};

export default useGetMovieData;
