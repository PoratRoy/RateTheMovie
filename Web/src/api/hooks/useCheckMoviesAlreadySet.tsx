import { useGamePlayContext } from "../../context/GamePlayContext";
import useHandleMovies from "../../hooks/context/useHandleMovies";
import { useSingleton } from "../../hooks/useSingleton";
import { SessionKey } from "../../models/enums/session";
import { Card } from "../../models/types/card";
import Session from "../../utils/sessionStorage";
import { checkMoviesAlreadySet } from "../utils/movie";

const useCheckMoviesAlreadySet = () => {
    //TODO: maybe I can move it to the game context with setStateFromSession
    const { handleGameCards } = useHandleMovies();
    const { gameCards, setFetchLoading } = useGamePlayContext();
    useSingleton(async () => {
        setFetchLoading(true);
        if (!checkMoviesAlreadySet(gameCards)) {
            const sessionGameCards: Card[] = Session.get(SessionKey.GAME_CARDS);
            if (sessionGameCards && sessionGameCards.length > 0) {
                handleGameCards(sessionGameCards);
            }
        } else {
            setFetchLoading(false);
        }
    });
};

export default useCheckMoviesAlreadySet;
