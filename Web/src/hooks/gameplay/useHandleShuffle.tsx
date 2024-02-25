import useBackupRound from "../../api/hooks/useBackupRound";
import { SessionKey } from "../../models/enums/session";
import Session from "../../utils/sessionStorage";
import useHandleMovies from "./useHandleMovies";
import useClear from "./useClear";

const useHandleShuffle = () => {
    const { backupRoundMovies } = useBackupRound();
    const { handleRefresh } = useClear();
    const { handleMovieCards } = useHandleMovies();

    const handleShuffle = () => {
        const moviesBackup = Session.get(SessionKey.BACKUP);
        const filters = Session.get(SessionKey.FILTERS);
        if (!moviesBackup) return; //TODO: show no more movies with this filter
        handleRefresh();
        backupRoundMovies(filters);
        const movies = moviesBackup[0];
        Session.removeFrom(SessionKey.BACKUP, 0);
        handleMovieCards(movies);
    };

    return { handleShuffle };
};

export default useHandleShuffle;
