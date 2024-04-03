import { useGamePlayContext } from "../../context/GamePlayContext";
import useHandleMovies from "../../hooks/gameplay/useHandleMovies";
import { useSingleton } from "../../hooks/global/useSingleton";
import { SessionKey } from "../../models/enums/session";
import { Game } from "../../models/types/game";
import { Movie } from "../../models/types/movie";
import { initGameCards } from "../../utils/card";
import { isFinishPlacingElectedCards } from "../../utils/finish";
import Session from "../../utils/storage/sessionStorage";
import { checkMoviesAlreadySet } from "../utils/movie";

const useCheckMoviesAlreadySet = () => {
    const { handleGameCards } = useHandleMovies();
    const { gameCards, correctOrder, currentPlayer, setFetchLoading, setCorrectOrder } =
        useGamePlayContext();
    useSingleton(async () => {
        setFetchLoading(true);
        if (!checkMoviesAlreadySet(gameCards)) {
            const sessionMovies: Movie[][] | undefined = Session.get(SessionKey.ROUNDS_MOVIES);
            const sessionGame: Game | undefined = Session.get(SessionKey.GAME);

            if (sessionGame && sessionMovies && sessionMovies.length > 0) {
                const movies = sessionMovies[sessionGame.currentRound - 1];
                const gameCards = initGameCards(movies);
                handleGameCards(gameCards);
            }
            if (currentPlayer && !checkMoviesAlreadySet(correctOrder)) {
                const selectedCards = isFinishPlacingElectedCards(currentPlayer);
                setCorrectOrder(selectedCards);
            }
        } else {
            setFetchLoading(false);
        }
    });
};

export default useCheckMoviesAlreadySet;
