import { useErrorContext } from "../../context/ErrorContext";
import { MovieFilters } from "../../models/types/movie";
import useDiscoverMovies from "./useDiscoverMovies";
import useSessionBackupMovies from "./useSessionBackupMovies";

const useBackupRound = () => {
    const { discoverMovies } = useDiscoverMovies();
    const { backupMovies } = useSessionBackupMovies();
    const { handleError } = useErrorContext();

    const backupRoundMovies = async (filters?: MovieFilters | undefined) => {
        try {
            const moviesTMDB = await discoverMovies(filters);
            //TODO: no more then 3 backup
            await backupMovies(moviesTMDB);
        } catch (error) {
            handleError((error as Error).message || "Something went wrong");
        } 
    };

    return { backupRoundMovies };
};

export default useBackupRound;
