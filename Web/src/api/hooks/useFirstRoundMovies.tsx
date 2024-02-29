import { useErrorContext } from "../../context/ErrorContext";
import { useGamePlayContext } from "../../context/GamePlayContext";
import useHandleMovies from "../../hooks/gameplay/useHandleMovies";
import { PACK_CARDS_NUM } from "../../models/constant";
import { ModOption } from "../../models/enums/landing";
import { MovieFilters } from "../../models/types/filter";
import { MovieTMDB } from "../../models/types/movie";
import useDiscoverMovies from "./useDiscoverMovies";
import useGetMovieData from "./useGetMovieData";
import useSessionBackupMovies from "./useSessionBackupMovies";

const useFirstRoundMovies = () => {
    const { setFetchLoading } = useGamePlayContext();
    const { discoverMovies } = useDiscoverMovies();
    const { getMovieRatingData, getMovieViewData } = useGetMovieData();
    const { backupMovies } = useSessionBackupMovies();
    const { handleError } = useErrorContext();
    const { handleMovieCards, handleGameCardsMoreData } = useHandleMovies();

    const firstRoundMovies = async (filters?: MovieFilters | undefined, mod?: ModOption) => {
        try {
            setFetchLoading(true);
            const moviesTMDB: MovieTMDB[] = await discoverMovies(filters);

            const [moviesOMDB, remainingMovies] = await getMovieRatingData(moviesTMDB);
            if (moviesOMDB.length === PACK_CARDS_NUM) {
                handleMovieCards(moviesOMDB, mod);
            }

            const movies = await getMovieViewData(moviesOMDB);
            handleGameCardsMoreData(movies);

            await backupMovies(remainingMovies);
        } catch (error) {
            handleError((error as Error).message || "Something went wrong");
        } finally {
            setFetchLoading(false);
        }
    };

    return { firstRoundMovies };
};

export default useFirstRoundMovies;
