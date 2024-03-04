import { useNavigate } from "react-router-dom";
import { useGamePlayContext } from "../../context/GamePlayContext";
import path from "../../router/routePath.json";
import { RoundAction } from "../../models/types/union";
import Session from "../../utils/sessionStorage";
import { SessionKey } from "../../models/enums/session";
import useBackupRound from "../../api/hooks/useBackupRound";
import useHandleMovies from "./useHandleMovies";

const useGameActions = (close: () => void) => {
    const { refreshGameContext, clearGameContext, setNextRound, setRoundNumber, game } =
        useGamePlayContext();
    const { backupRoundMovies } = useBackupRound();
    const { handleMovieCards } = useHandleMovies();
    const navigate = useNavigate();

    const handleQuit = () => {
        close();
        clearGameContext();
        navigate(path.land);
    };

    const handleRestart = (action?: RoundAction) => {
        setRoundNumber(action || "reset");
        setNextRound(false);
        handleShuffle();
        close();
    };

    const handleShuffle = () => {
        const moviesBackup = Session.get(SessionKey.BACKUP);
        if (!moviesBackup) return; //TODO: show no more movies with this filter
        refreshGameContext();
        backupRoundMovies(game?.filters);
        const movies = moviesBackup[0];
        Session.removeFrom(SessionKey.BACKUP, 0);
        handleMovieCards(movies);
        close();
    };

    return { handleQuit, handleRestart, handleShuffle };
};

export default useGameActions;
