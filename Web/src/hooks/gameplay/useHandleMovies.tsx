import { useGamePlayContext } from "../../context/GamePlayContext";
import { PACK_CARDS_NUM } from "../../models/constant";
import { SessionKey } from "../../models/enums/session";
import { Card } from "../../models/types/card";
import { Movie } from "../../models/types/movie";
import { initGameCards } from "../../utils/card";
import { logMovies } from "../../utils/log";
import Session from "../../utils/sessionStorage";
import useCorrectOrder from "./useCorrectOrder";

const useHandleMovies = () => {
    const { sortMoviesOrder, sortCardsOrder } = useCorrectOrder();
    const { setGameCards, setCurrentPlayer, setFetchLoading } = useGamePlayContext();

    const handleMovieCards = (movies: Movie[]) => {
        setFetchLoading(true);
        logMovies(movies);
        const correctMoviesOrder = sortMoviesOrder(movies);
        const correctOrder = initGameCards(correctMoviesOrder || []);
        const cards = initGameCards(movies);

        setGameCardsOnStateAndSession(cards, correctOrder);
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

    const setGameCardsOnStateAndSession = (cards: Card[], correctOrder?: Card[]) => {
        setTimeout(() => {
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
        }, 1000);
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
