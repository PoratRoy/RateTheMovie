import { useNavigate } from "react-router-dom";
import { useGamePlayContext } from "../../context/GamePlayContext";
import path from "../../router/routePath.json";
import { RoundAction } from "../../models/types/union";
import Session from "../../utils/sessionStorage";
import { SessionKey } from "../../models/enums/session";
import useBackupRound from "../../api/hooks/useBackupRound";
import useHandleMovies from "./useHandleMovies";
import { useAnimationContext } from "../../context/AnimationContext";
import { useSocketContext } from "../../context/SocketContext";

const useGameActions = (close: () => void) => {
    const {
        game,
        refreshGameContext,
        clearGameContext,
        resetGameContext,
        setRoundNumber,
        setIsRoundFinished,
    } = useGamePlayContext();
    const { setIsFlipCard, clearAnimationContext, refreshAnimationContext } = useAnimationContext();
    const { resetSocketContext, clearSocketContext} = useSocketContext();
    const { backupRoundMovies } = useBackupRound();
    const { handleMovieCards } = useHandleMovies();
    const navigate = useNavigate();

    const handleQuit = () => {
        close();
        clearGameContext();
        clearSocketContext();
        clearAnimationContext();
        navigate(path.land);
    };

    const handleRestart = () => {
        setIsRoundFinished(false);
        resetSocketContext();
        resetGameContext();
        handelNewMovies();
    };

    //You have submitted your masterpiece.
    // Let's wait for the others...

    const handleContinue = (action: RoundAction) => {
        setRoundNumber(action);
        setIsRoundFinished(false);
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
