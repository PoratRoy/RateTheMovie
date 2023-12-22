import { useEffect, useState } from "react";
import path from "../path.json";
import axios from "axios";
import { OmdbBaseURL, TmdbBaseURL } from "../constants";
import { get5Indexs, getRandomNumber } from "../../utils/calc";
import { Movie, MovieOMDB, MovieTMDB } from "../../models/types/movie";
import { extractYearFromDateString } from "../../utils/date";

const useMoviesTMDB = () => {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | undefined>(undefined);

    const discoverMovies = async () => {
        const page = getRandomNumber(1, 500);

        const URL = `${TmdbBaseURL}${path.tmdb.discover}`;

        setLoading(true);
        setError(undefined);
        try {
            const response = await axios.get(URL, {
                params: { api_key: import.meta.env.VITE_TMDB_API_KEY || "", page },
            });
            const resultsTMDB: MovieTMDB[] = response.data.results;
            console.log("resultsTMDB", resultsTMDB);
            if (resultsTMDB && resultsTMDB.length >= 5) {
                let movies: Movie[] = [];
                const indexs: number[] = get5Indexs();

                for (const index of indexs) {
                    const tmdbMovie = resultsTMDB[index];

                    const { title, release_date } = tmdbMovie;
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
                    console.log(`index ${index} resultsOMDB -`, resultsOMDB);

                    const movie: Movie = {
                        adult: tmdbMovie.adult,
                        backdrop_path: tmdbMovie.backdrop_path,
                        genre_ids: tmdbMovie.genre_ids,
                        id: tmdbMovie.id,
                        release_date: tmdbMovie.release_date,
                        title: tmdbMovie.title,
                        video: "",
                        imdbID: resultsOMDB.imdbID,
                        poster_path: resultsOMDB.Poster,
                        imdbRating: resultsOMDB.imdbRating,
                        imdbVotes: resultsOMDB.imdbVotes,
                        actors: resultsOMDB.Actors,
                        director: resultsOMDB.Director,
                        website: resultsOMDB.Website,
                    };
                    movies.push(movie);
                }

                setMovies(movies);
            } else {
                setError("Something went wrong");
            }
        } catch (error) {
            setError((error as Error).message || "Something went wrong");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        discoverMovies();
    }, []);

    return { movies, loading, error };
};

export default useMoviesTMDB;
