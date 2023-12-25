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

const useDiscoverMovies = () => {
    const { setError } = useErrorContext();
    const { movies, setMovies, setMovieLoading } = useMovieContext();

    const discoverMovies = async () => {
        if (movies.length > 0) return;

        const page = getRandomNumber(1, 500);

        const URL = `${TmdbBaseURL}${path.tmdb.discover}`;

        setMovieLoading(true);
        setError(undefined);
        try {
            const response = await axios.get(URL, {
                params: { api_key: import.meta.env.VITE_TMDB_API_KEY || "", page },
            });
            const resultsTMDB: MovieTMDB[] = response.data.results;
            if (resultsTMDB && resultsTMDB.length >= PACK_CARDS_NUM) {
                let movies: Movie[] = [];
                const indexs: number[] = generateRandomArray(resultsTMDB.length);

                for (const index of indexs) {
                    const tmdbMovie = resultsTMDB[index];

                    const { title, release_date } = tmdbMovie;
                    if (!title || !release_date) {
                        setError("Something went wrong");
                        return;
                    }

                    const [isValidDate, year] = extractYearFromDateString(release_date);
                    if (!isValidDate) {
                        setError(year);
                        return;
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

                    if (resultsOMDB.Poster && resultsOMDB.Poster !== "N/A") {
                        const movie: Movie = {
                            title: title,
                            backdrop_path: tmdbMovie.backdrop_path,
                            release_date: tmdbMovie.release_date,
                            genre_ids: tmdbMovie.genre_ids,
                            adult: tmdbMovie.adult,
                            id: tmdbMovie.id,
                            video: "",
                            imdbRating: resultsOMDB.imdbRating,
                            imdbVotes: resultsOMDB.imdbVotes,
                            poster_path: resultsOMDB.Poster,
                            director: resultsOMDB.Director,
                            website: resultsOMDB.Website,
                            imdbID: resultsOMDB.imdbID,
                            actors: resultsOMDB.Actors,
                        };
                        movies.push(movie);
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
