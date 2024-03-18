import { useNavigate } from "react-router-dom";
import { useGamePlayContext } from "../../context/GamePlayContext";
import path from "../../router/routePath.json";
import { RoundAction } from "../../models/types/union";
import useHandleMovies from "./useHandleMovies";
import { useAnimationContext } from "../../context/AnimationContext";
import { useSocketContext } from "../../context/SocketContext";
import useMod from "./useMod";
import { setRoundNum } from "../../utils/game";
import useMoviesGame from "./useBackup";

const useGameActions = (close: () => void) => {
    const {
        game,
        currentPlayer,
        refreshGameContext,
        clearGameContext,
        resetGameContext,
        setRoundNumber,
        setIsRoundFinished,
        setGame,
        backupMovies,
    } = useGamePlayContext();
    const { setIsFlipCard, clearAnimationContext } = useAnimationContext();
    const { resetSocketContext, clearSocketContext, handleNextRound } = useSocketContext();
    const { handleMovieCards } = useHandleMovies();
    const { setMoviesGame } = useMoviesGame();
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
        clearAnimationContext();
        resetSocketContext();
        resetGameContext();
        setMoviesGame(game);
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
                setIsFlipCard(true);
                if (currentPlayer.role === "host") {
                    const movies = backupMovies[currentRound];
                    setTimeout(() => {
                        const cards = handleMovieCards(movies);
                        handleNextRound(round, cards);
                        setIsFlipCard(prev => !prev);
                    }, 1000);
                }
                close();
            } else {
                handelNewMovies(game.currentRound);
            }
        }
    };

    const handleShuffle = () => {
        refreshGameContext();
        if (game) {
            const { rounds, shuffleAttempt } = game;
            const index = rounds + shuffleAttempt - 1;
            handelNewMovies(index);
            setGame((prev) => {
                if (prev) {
                    const game = { ...prev, shuffleAttempt: prev.shuffleAttempt - 1 };
                    return game;
                }
                return prev;
            });
        }
    };

    const handelNewMovies = (index: number) => {
        setIsFlipCard(true);
        const movies = backupMovies[index];
        close();
        setTimeout(() => {
            handleMovieCards(movies);
            setIsFlipCard(true);
        }, 1000);
    };

    return { handleQuit, handleRestart, handleShuffle, handleContinue };
};

export default useGameActions;
