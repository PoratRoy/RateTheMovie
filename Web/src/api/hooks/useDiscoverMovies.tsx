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
import { MOCK_MOVIES } from "../../models/mock";

const useDiscoverMovies = () => {
    const { setError } = useErrorContext();
    const { movies, setMovies, setMovieLoading, filters } = useMovieContext();

    const discoverMovies = async () => {
        if (checkMoviesAlreadySet(movies)) return;

        const page = getRandomNumber(1, 500);

        const URL = `${TmdbBaseURL}${path.tmdb.discover}`;

        setMovieLoading(true);
        setError(undefined);

        console.log(`${PACK_CARDS_NUM} movies: `, MOCK_MOVIES);
        setMovies(MOCK_MOVIES);
        setMovieLoading(false);
        return;
        
        try {
            const response = await axios.get(URL, { params: setQueryParams(page, filters) });
            const resultsTMDB: MovieTMDB[] = response.data.results;

            if (resultsTMDB && resultsTMDB.length >= PACK_CARDS_NUM) {
                let movies: Movie[] = [];
                const indexs: number[] = generateRandomArray(resultsTMDB.length);

                for (const index of indexs) {
                    const tmdbMovie = resultsTMDB[index];

                    const { title, release_date, id } = tmdbMovie;
                    if (!title || !release_date || !id) {
                        setError("Something went wrong");
                        continue;
                    }

                    const [isValidDate, year] = extractYearFromDateString(release_date);
                    if (!isValidDate) {
                        setError(year);
                        continue;
                    }

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
                        // movies.push(movie);
                    }

                    if (movies.length === PACK_CARDS_NUM) break;
                }
                console.log(`${PACK_CARDS_NUM} movies: `, movies);
                setMovies(movies);
            } else {
                setError("Something went wrong");
            }
        } catch (error) {
            setError((error as Error).message || "Something went wrong");
        } finally {
            setMovieLoading(false);
        }
    };

    useSingleton(discoverMovies);
};

export default useDiscoverMovies;
