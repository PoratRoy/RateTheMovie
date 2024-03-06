import { useNavigate } from "react-router-dom";
import { useGamePlayContext } from "../../context/GamePlayContext";
import path from "../../router/routePath.json";
import { RoundAction } from "../../models/types/union";
import Session from "../../utils/sessionStorage";
import { SessionKey } from "../../models/enums/session";
import useBackupRound from "../../api/hooks/useBackupRound";
import useHandleMovies from "./useHandleMovies";
import { useAnimationContext } from "../../context/AnimationContext";

const useGameActions = (close: () => void) => {
    const { refreshGameContext, clearGameContext, resetGameContext, setRoundNumber, game } =
        useGamePlayContext();
    const { setIsFlipCard, clearAnimationContext, refreshAnimationContext, setNextRound } =
        useAnimationContext();
    const { backupRoundMovies } = useBackupRound();
    const { handleMovieCards } = useHandleMovies();
    const navigate = useNavigate();

    const handleQuit = () => {
        close();
        clearGameContext();
        clearAnimationContext();
        navigate(path.land);
    };

    const handleRestart = () => {
        setNextRound(false);
        resetGameContext();
        handelNewMovies();
    };

    const handleContinue = (action: RoundAction) => {
        setRoundNumber(action);
        setNextRound(false);
        refreshGameContext();
        handelNewMovies();
    };

    const handleShuffle = () => {
        refreshGameContext();
        handelNewMovies();
    };

    const handelNewMovies = () => {
        setIsFlipCard(true);
        const moviesBackup = Session.get(SessionKey.BACKUP);
        if (!moviesBackup) return; //TODO: show no more movies with this filter
        backupRoundMovies(game?.filters);
        const movies = moviesBackup[0];
        Session.removeFrom(SessionKey.BACKUP, 0);
        close();
        setTimeout(() => {
            handleMovieCards(movies);
            setIsFlipCard(true);
            refreshAnimationContext();
        }, 1000);
    };

    return { handleQuit, handleRestart, handleShuffle, handleContinue };
};

export default useGameActions;
