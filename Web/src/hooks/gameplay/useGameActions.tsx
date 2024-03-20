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
import { useGameStatusContext } from "../../context/GameStatusContext";
import { CardFace } from "../../models/enums/animation";
import Session from "../../utils/storage/sessionStorage";

const useGameActions = (close: () => void) => {
    const {
        game,
        currentPlayer,
        refreshGameContext,
        clearGameContext,
        resetGameContext,
        setRoundNumber,
        setGame,
        backupMovies,
    } = useGamePlayContext();
    const { setIsFlipCard, clearAnimationContext } = useAnimationContext();
    const { resetSocketContext, clearSocketContext, handleNextRound, handlePlayerLeave } =
        useSocketContext();
    const {
        setIsRoundFinished,
        setIsPlayerFinishRound,
        setIsRoundStart,
        resetGameStatusContext,
        clearGameStatusContext,
    } = useGameStatusContext();
    const { handleMovieCards } = useHandleMovies();
    const { setMoviesGame } = useMoviesGame();
    const navigate = useNavigate();
    const { isMulti } = useMod();

    const handleQuit = () => {
        close();
        if (isMulti()) handlePlayerLeave();
        clearGameContext();
        clearSocketContext();
        clearAnimationContext();
        clearGameStatusContext();
        Session.clear();
        navigate(path.land);
    };

    const handleRestart = () => {
        resetGameStatusContext();
        clearAnimationContext();
        resetSocketContext();
        resetGameContext();
        setMoviesGame(game);
        close();
    };

    const handleContinue = (action: RoundAction = "increase") => {
        if (game && currentPlayer) {
            const { currentRound } = game;
            const round = setRoundNum(action, currentRound);
            setRoundNumber(round);
            setIsRoundFinished(false);
            setIsPlayerFinishRound(false);
            refreshGameContext();
            if (isMulti()) {
                if (currentPlayer.role === "host") {
                    const movies = backupMovies[currentRound];
                    const cards = handleMovieCards(movies);
                    handleNextRound(round, cards);
                    setIsRoundStart(true);
                    setTimeout(() => {
                        setIsFlipCard(CardFace.FRONT);
                    }, 300);
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
        const movies = backupMovies[index];
        handleMovieCards(movies);
        close();
        setTimeout(() => {
            setIsFlipCard(CardFace.FRONT);
        }, 300);
    };

    return { handleQuit, handleRestart, handleShuffle, handleContinue };
};

export default useGameActions;
