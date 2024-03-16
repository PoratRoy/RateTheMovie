import { useNavigate } from "react-router-dom";
import { useGamePlayContext } from "../../context/GamePlayContext";
import path from "../../router/routePath.json";
import { RoundAction } from "../../models/types/union";
import useHandleMovies from "./useHandleMovies";
import { useAnimationContext } from "../../context/AnimationContext";
import { useSocketContext } from "../../context/SocketContext";
import useMod from "./useMod";
import { setRoundNum } from "../../utils/game";

const useGameActions = (close: () => void) => {
    const {
        game,
        currentPlayer,
        refreshGameContext,
        clearGameContext,
        resetGameContext,
        setRoundNumber,
        setIsRoundFinished,
        backupMovies,
    } = useGamePlayContext();
    const { setIsFlipCard, clearAnimationContext, refreshAnimationContext } = useAnimationContext();
    const { resetSocketContext, clearSocketContext, handleNextRound } = useSocketContext();
    const { handleMovieCards } = useHandleMovies();
    const navigate = useNavigate();
    const { isMulti } = useMod();

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

    //TODO:
    //You have submitted your masterpiece.
    // Let's wait for the others...

    const handleContinue = (action: RoundAction = "increase") => {
        if (game && currentPlayer) {
            const { currentRound } = game;
            const round = setRoundNum(action, currentRound);
            setRoundNumber(round);
            setIsRoundFinished(false);
            refreshGameContext();
            if (isMulti()) {
                if (currentPlayer.role === "host") {
                    const movies = backupMovies[(currentRound) - 1];
                    //TODO: for woriking without flip remove this
                    setIsFlipCard(true);
                    setTimeout(() => {
                        const cards = handleMovieCards(movies);
                        handleNextRound(round, cards);
                        //TODO: for woriking without flip remove this
                        setIsFlipCard(false);
                    }, 1000);
                }
                close();
            } else {
                handelNewMovies();
            }
        }
    };

    const handleShuffle = () => {
        refreshGameContext();
        handelNewMovies();
    };

    const handelNewMovies = () => {
        setIsFlipCard(true);
        const movies = backupMovies[(game?.currentRound || 1)];
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
