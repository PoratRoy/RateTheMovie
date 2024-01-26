import path from "../path.json";
import axios from "axios";
import { OmdbBaseURL, TmdbBaseURL } from "../constants";
import { generateRandomArray, getRandomNumber } from "../../utils/calc";
import { Movie, MovieOMDB, MovieTMDB } from "../../models/types/movie";
import { extractYearFromDateString } from "../../utils/date";
import { useErrorContext } from "../../context/ErrorContext";
import { useSingleton } from "../../hooks/useSingleton";
import { useMovieContext } from "../../context/MovieContext";
import { PACK_CARDS_NUM } from "../../models/constants";
import { checkMoviesAlreadySet, setNewMovie, setQueryParams } from "../utils";
import Session from "../../utils/sessionStorage";
import { SessionKey } from "../../models/enums/session";

const useDiscoverMovies = () => {
    const { setError } = useErrorContext();
    const { movies, setMovies, setMovieLoading, filters } = useMovieContext();

    const discoverMovies = async () => {
        // console.log(`${PACK_CARDS_NUM} movies: `, MOCK_MOVIES);
        // setMovieLoading(false);
        // setMovies(MOCK_MOVIES);
        // return;
        if (checkMoviesAlreadySet(movies)) return;
        const sessionMovies = Session.get(SessionKey.MOVIES);
        if (sessionMovies && sessionMovies.length > 0) {
            setMovies(sessionMovies);
            setMovieLoading(false);
            return;
        }

        const page = getRandomNumber(1, 500);

        const URL = `${TmdbBaseURL}${path.tmdb.discover}`;

        setMovieLoading(true);
        setError(undefined);
        try {
            const response = await axios.get(URL, { params: setQueryParams(page, filters) });
            const resultsTMDB: MovieTMDB[] = response.data.results;

            if (resultsTMDB && resultsTMDB.length >= PACK_CARDS_NUM) {
                let movies: Movie[] = [];
                //got 20 movies
                const indexs: number[] = generateRandomArray(resultsTMDB.length);
                //got 20 indexs
                for (const index of indexs) {
                    const tmdbMovie = resultsTMDB[index];

                    const { title, release_date, id } = tmdbMovie;
                    const [isValidDate, year] = extractYearFromDateString(release_date);
                    if (title && release_date && id && isValidDate) {

                        const response = await axios.get(OmdbBaseURL, {
                            params: {
                                apikey: import.meta.env.VITE_OMDB_API_KEY || "",
                                t: title,
                                y: year,
                                plot: "full",
                            },
                        });
                        const resultsOMDB: MovieOMDB = response.data;
    
                        const movie = setNewMovie(tmdbMovie, resultsOMDB);
                        if (movie) {
                            movies.push(movie);
                        }
                        if (movies.length === PACK_CARDS_NUM) break;
                    }
                }
                if(movies.length === PACK_CARDS_NUM){
                    console.log(`${PACK_CARDS_NUM} movies: `, movies);
                    Session.set(SessionKey.MOVIES, movies);
                    setMovies(movies);
                    return;
                }
            } 
            setError("Something went wrong");
        } catch (error) {
            setError((error as Error).message || "Something went wrong");
        } finally {
            setMovieLoading(false);
        }
    };

    useSingleton(discoverMovies);
};

export default useDiscoverMovies;
