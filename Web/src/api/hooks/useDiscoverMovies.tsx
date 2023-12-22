import { useEffect, useState } from "react";
import path from "../path.json";
import axios from "axios";
import { TmdbBaseURL } from "../constants";
import { getRandomNumber } from "../../utils/calc";
import { Movie } from "../../models/types/movie";

const useDiscoverMovies = () => {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | undefined>(undefined);

    const discoverMovies = async () => {
        const page = getRandomNumber(1, 500);

        const URL = `${TmdbBaseURL}${path.tmdb.discover}?api_key=${
            import.meta.env.VITE_TMDB_API_KEY || ""
        }&page=${page}`;

        setLoading(true);
        setError(undefined);
        try {
            const response = await axios.get(URL);
            const results: Movie[] = response.data.results;
            if (results && results.length > 0) {
                setMovies(results);
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

export default useDiscoverMovies;
