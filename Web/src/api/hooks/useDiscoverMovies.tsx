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

    const setQueryParams = (
        page: number,
        filters?: {
            year?: [string, string];
            genre?: string[];
            country?: string;
        },
    ) => {
        let release_date_gte = "";
        let release_date_lte = "";
        let genres = "";
        let with_origin_country = "";
        if (filters) {
            if (filters.year) {
                release_date_gte = `${filters.year[0]}-01-01`;
                release_date_lte = `${filters.year[1]}-12-31`;
            }
            if (filters.genre) {
                genres = filters.genre.join(",");
            }
            if(filters.country) {
                with_origin_country = filters.country;
            }
        }

        return {
            api_key: import.meta.env.VITE_TMDB_API_KEY || "",
            page,
            "release_date.gte": release_date_gte,
            "release_date.lte": release_date_lte,
            with_genres: genres,
        };
    };

    const discoverMovies = async (filters?: {
        year?: [string, string];
        genre?: string[];
        country?: string;
    }) => {
        if (movies.length > 0) return;

        const page = getRandomNumber(1, 500);

        const URL = `${TmdbBaseURL}${path.tmdb.discover}`;

        setMovieLoading(true);
        setError(undefined);
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

                    if (
                        resultsOMDB.Poster &&
                        resultsOMDB.Poster !== "N/A" &&
                        resultsOMDB.imdbRating &&
                        resultsOMDB.imdbRating !== "N/A" // TODO: what shold I do?
                    ) {
                        const movie: Movie = {
                            title: title,
                            id: id.toString(),
                            backdrop_path: tmdbMovie.backdrop_path,
                            release_date: tmdbMovie.release_date,
                            genre_ids: tmdbMovie.genre_ids,
                            adult: tmdbMovie.adult,
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
