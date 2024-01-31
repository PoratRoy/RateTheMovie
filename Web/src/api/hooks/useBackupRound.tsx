import { useErrorContext } from "../../context/ErrorContext";
import { MovieFilters } from "../../models/types/movie";
import useDiscoverMovies from "./useDiscoverMovies";
import useSessionBackupMovies from "./useSessionBackupMovies";

const useBackupRound = () => {
    const { discoverMovies } = useDiscoverMovies();
    const { backupMovies } = useSessionBackupMovies();
    const { setError } = useErrorContext();

    const backupRoundMovies = async (filters?: MovieFilters | undefined) => {
        try {
            const moviesTMDB = await discoverMovies(filters);
            await backupMovies(moviesTMDB);
        } catch (error) {
            setError((error as Error).message || "Something went wrong");
        } 
    };

    return { backupRoundMovies };
};

export default useBackupRound;
