import { useNavigate } from "react-router-dom";
import { useGamePlayContext } from "../../context/GamePlayContext";
import path from "../../router/routePath.json";
import { RoundAction } from "../../models/types/union";
import useHandleMovies from "./useHandleMovies";
import { useAnimationContext } from "../../context/AnimationContext";
import { useSocketContext } from "../../context/SocketContext";
import useMod from "./useMod";
import useMoviesGame from "./useRoundsMoviesGame";
import { CardFace } from "../../models/enums/animation";
import Session from "../../utils/storage/sessionStorage";
import { FILP_CARD_TIME, SECOND_TIME } from "../../models/constant/time";

const useGameActions = (close: () => void) => {
    const {
        game,
        currentPlayer,
        refreshGameContext,
        clearGameContext,
        resetGameContext,
        setRoundNumber,
        roundsMovies,
        setIsRoundFinished,
        setIsPlayerFinishRound,
        setIsRoundStart,
    } = useGamePlayContext();
    const { setIsFlipCard, clearAnimationContext } = useAnimationContext();
    const { clearSocketContext, handleNextRound, handlePlayerLeave } = useSocketContext();
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
        Session.clear();
        navigate(path.land);
    };

    const handleRestart = () => {
        setIsFlipCard(CardFace.BACK);
        setTimeout(() => {
            setMoviesGame(game);
            resetGameContext();
            clearAnimationContext();
            close();
        }, SECOND_TIME);
    };

    const handleContinue = (action: RoundAction = "increase") => {
        if (game && currentPlayer) {
            const { currentRound } = game;
            const round = setRoundNumber(action, currentRound);
            setIsRoundFinished(false);
            setIsPlayerFinishRound(false);
            refreshGameContext();
            if (isMulti()) {
                if (currentPlayer.role === "host") {
                    const movies = roundsMovies ? roundsMovies[currentRound] : [];
                    const cards = handleMovieCards(movies);
                    handleNextRound(round, cards);
                    setIsRoundStart(true);
                    setTimeout(() => {
                        setIsFlipCard(CardFace.FRONT);
                    }, FILP_CARD_TIME);
                }
                close();
            } else {
                handelNewMovies(game.currentRound);
            }
        }
    };

    const handelNewMovies = (index: number) => {
        const movies = roundsMovies ? roundsMovies[index] : [];
        handleMovieCards(movies);
        close();
        setTimeout(() => {
            setIsFlipCard(CardFace.FRONT);
        }, 300);
    };

    return { handleQuit, handleRestart, handleContinue };
};

export default useGameActions;
