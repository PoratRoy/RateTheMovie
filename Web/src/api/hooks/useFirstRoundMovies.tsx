import { useErrorContext } from "../../context/ErrorContext";
import { useMovieContext } from "../../context/MovieContext";
import useHandleMovies from "../../hooks/context/useHandleMovies";
import { DISCOVERD_MOVIES_NUM, PACK_CARDS_NUM } from "../../models/constants";
import { MovieFilters, MovieTMDB } from "../../models/types/movie";
import useDiscoverMovies from "./useDiscoverMovies";
import useGetMovieData from "./useGetMovieData";
import useSessionBackupMovies from "./useSessionBackupMovies";

const useFirstRoundMovies = () => {
    const { discoverMovies } = useDiscoverMovies();
    const { dataMovies } = useGetMovieData();
    const { backupMovies } = useSessionBackupMovies();
    const { setMovieLoading } = useMovieContext();
    const { setError } = useErrorContext();
    const { handleMovies } = useHandleMovies()

    const firstRoundMovies = async (filters?: MovieFilters | undefined) => {
        try {
            setMovieLoading(true);
            let increment: number = 0;
            let moviesTMDB: MovieTMDB[] = [];
            do {
                if (increment >= DISCOVERD_MOVIES_NUM / 2) {
                    throw new Error("Not enough movies with thouse filters");
                }
                const newMovies: MovieTMDB[] = await discoverMovies(filters);
                moviesTMDB.push(...newMovies);
                increment++;
            } while (moviesTMDB.length <= DISCOVERD_MOVIES_NUM);

            const [movies, remainingMovies] = await dataMovies(moviesTMDB);
            if (movies.length === PACK_CARDS_NUM) {
                handleMovies(movies);
            }

            await backupMovies(remainingMovies);

        } catch (error) {
            setError((error as Error).message || "Something went wrong");
        } finally {
            setMovieLoading(false);
        }
    };

    return { firstRoundMovies };
};

export default useFirstRoundMovies;
