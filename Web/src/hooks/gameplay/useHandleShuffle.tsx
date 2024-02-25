import useBackupRound from "../../api/hooks/useBackupRound";
import { SessionKey } from "../../models/enums/session";
import Session from "../../utils/sessionStorage";
import useHandleMovies from "./useHandleMovies";
import useClear from "./useClear";
import { useGamePlayContext } from "../../context/GamePlayContext";

const useHandleShuffle = () => {
    const { backupRoundMovies } = useBackupRound();
    const { handleRefresh } = useClear();
    const { handleMovieCards } = useHandleMovies();
    const {game} = useGamePlayContext();

    const handleShuffle = () => {
        const moviesBackup = Session.get(SessionKey.BACKUP);
        if (!moviesBackup) return; //TODO: show no more movies with this filter
        handleRefresh();
        backupRoundMovies(game?.filters);
        const movies = moviesBackup[0];
        Session.removeFrom(SessionKey.BACKUP, 0);
        handleMovieCards(movies);
    };

    return { handleShuffle };
};

export default useHandleShuffle;
