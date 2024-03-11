import { useGamePlayContext } from "../../context/GamePlayContext";
import { useSocketContext } from "../../context/SocketContext";
import { PACK_CARDS_NUM } from "../../models/constant";
import { ModOption } from "../../models/enums/landing";
import { SessionKey } from "../../models/enums/session";
import { Card } from "../../models/types/card";
import { Movie } from "../../models/types/movie";
import { initGameCards } from "../../utils/card";
import { logMovies } from "../../utils/log";
import Session from "../../utils/storage/sessionStorage";
import useCorrectOrder from "./useCorrectOrder";
import useMod from "./useMod";

const useHandleMovies = () => {
    const { sortMoviesOrder, sortCardsOrder } = useCorrectOrder();
    const { setGameCards, setCurrentPlayer, setFetchLoading } = useGamePlayContext();
    const { handleCards } = useSocketContext();
    const { isMulti } = useMod();

    const handleMovieCards = (movies: Movie[], mod?: ModOption) => {
        logMovies(movies);
        const correctOrder = sortMoviesOrder(movies);
        const cards = initGameCards(movies);

        setGameCardsOnStateAndSession(cards, correctOrder);
        if (isMulti(mod)) {
            handleCards(cards);
        }
    };

    const handleGameCards = (cards: Card[]) => {
        const correctOrder = sortCardsOrder(cards);
        setGameCardsOnStateAndSession(cards, correctOrder);
    };

    const handleGameCardsMoreData = (movies: Movie[]) => {
        setGameCards((prev) => {
            const cards = prev.map((gameCard: Card, index: number) => {
                return { ...gameCard, movie: movies[index] } as Card;
            });
            Session.set(SessionKey.GAME_CARDS, cards);
            return cards;
        });
    };

    const setGameCardsOnStateAndSession = (cards: Card[], correctOrder?: string[]) => {
        if (correctOrder && correctOrder.length === PACK_CARDS_NUM) {
            setCurrentPlayer((player) => {
                if (!player) return player;
                return {
                    ...player,
                    electedCards: {
                        ...player.electedCards,
                        correctOrder,
                    },
                };
            });
        }
        setGameCards(cards);
        Session.set(SessionKey.GAME_CARDS, cards);
        setFetchLoading(false);
    };

    const handleBackupMovies = (movies: Movie[]) => {
        Session.add(SessionKey.BACKUP, movies);
    };

    return {
        handleMovieCards,
        handleGameCards,
        handleGameCardsMoreData,
        handleBackupMovies,
    };
};

export default useHandleMovies;
