import { useGamePlayContext } from "../../context/GamePlayContext";
import useHandleMovies from "../../hooks/context/useHandleMovies";
import { useSingleton } from "../../hooks/useSingleton";
import { SessionKey } from "../../models/enums/session";
import { GameCard } from "../../models/types/card";
import Session from "../../utils/sessionStorage";
import { checkMoviesAlreadySet } from "../utils/movie";

const useCheckMoviesAlreadySet = () => {
    const { handleGameCards } = useHandleMovies();
    const { gameCards, setFetchLoading } = useGamePlayContext();
    useSingleton(async () => {
        setFetchLoading(true);
        if (!checkMoviesAlreadySet(gameCards)) {
            const sessionGameCards: GameCard[] = Session.get(SessionKey.GAME_CARDS);
            if (sessionGameCards && sessionGameCards.length > 0) {
                handleGameCards(sessionGameCards);
            }
        } else {
            setFetchLoading(false);
        }
    });
};

export default useCheckMoviesAlreadySet;
