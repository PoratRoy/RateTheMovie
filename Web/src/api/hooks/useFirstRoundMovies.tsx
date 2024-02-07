import { useErrorContext } from "../../context/ErrorContext";
import { useMovieContext } from "../../context/MovieContext";
import useHandleMovies from "../../hooks/context/useHandleMovies";
import { PACK_CARDS_NUM } from "../../models/constants";
import { MovieFilters, MovieTMDB } from "../../models/types/movie";
import useDiscoverMovies from "./useDiscoverMovies";
import useGetMovieData from "./useGetMovieData";
import useSessionBackupMovies from "./useSessionBackupMovies";

const useFirstRoundMovies = () => {
    const { discoverMovies } = useDiscoverMovies();
    const { getMovieRatingData, getMovieViewData } = useGetMovieData();
    const { backupMovies } = useSessionBackupMovies();
    const { setMovieLoading } = useMovieContext();
    const { handleError } = useErrorContext();
    const { handleMovies, handleMoreMovieData } = useHandleMovies();

    const firstRoundMovies = async (filters?: MovieFilters | undefined) => {
        try {
            setMovieLoading(true);
            const moviesTMDB: MovieTMDB[] = await discoverMovies(filters);

            const [moviesOMDB, remainingMovies] = await getMovieRatingData(moviesTMDB);
            if (moviesOMDB.length === PACK_CARDS_NUM) {
                handleMovies(moviesOMDB);
            }

            const movies = await getMovieViewData(moviesOMDB);
            handleMoreMovieData(movies);

            await backupMovies(remainingMovies);
        } catch (error) {
            handleError((error as Error).message || "Something went wrong");
        } finally {
            setMovieLoading(false);
        }
    };

    return { firstRoundMovies };
};

export default useFirstRoundMovies;
