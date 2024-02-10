import useBackupRound from "../api/hooks/useBackupRound";
import { SessionKey } from "../models/enums/session";
import Session from "../utils/sessionStorage";
import useHandleMovies from "./context/useHandleMovies";
import useClear from "./useClear";

const useHandleShuffle = () => {
    const { backupRoundMovies } = useBackupRound();
    const { handleRefresh } = useClear();
    const { handleMovies } = useHandleMovies()

    const handleShuffle = () => {
        const moviesBackup = Session.get(SessionKey.BACKUP);
        const filters = Session.get(SessionKey.FILTERS);
        if(!moviesBackup) return; //TODO: show no more movies with this filter
        handleRefresh();
        backupRoundMovies(filters);
        Session.removeFrom(SessionKey.BACKUP, 0);
        const movies = moviesBackup[0];
        handleMovies(movies);
    };

    return { handleShuffle };
};

export default useHandleShuffle;
