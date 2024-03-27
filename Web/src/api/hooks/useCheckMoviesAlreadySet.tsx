import { useGamePlayContext } from "../../context/GamePlayContext";
import useHandleMovies from "../../hooks/gameplay/useHandleMovies";
import { useSingleton } from "../../hooks/global/useSingleton";
import { SessionKey } from "../../models/enums/session";
import { Card } from "../../models/types/card";
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
            const sessionGameCards: Card[] = Session.get(SessionKey.GAME_CARDS);
            if (sessionGameCards && sessionGameCards.length > 0) {
                handleGameCards(sessionGameCards);
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
