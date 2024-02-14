import { useGamePlayContext } from "../../context/GamePlayContext";
import { PACK_CARDS_NUM } from "../../models/constants";
import { SessionKey } from "../../models/enums/session";
import { Card } from "../../models/types/card";
import { Movie } from "../../models/types/movie";
import { initGameCards } from "../../utils/card";
import { logMovies } from "../../utils/log";
import Session from "../../utils/sessionStorage";
import useCorrectOrder from "../useCorrectOrder";

const useHandleMovies = () => {
    const { sortMoviesOrder, sortCardsOrder } = useCorrectOrder();
    const { setGameCards, setPlayers, setFetchLoading } = useGamePlayContext();

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
        let cards: Card[] = [];
        setGameCards((prev) => {
            return prev.map((gameCard: Card, index: number) => {
                const card = { ...gameCard, movie: movies[index] } as Card;
                cards.push(card);
                return card;
            });
        });
        Session.remove(SessionKey.GAME_CARDS);
        Session.set(SessionKey.GAME_CARDS, cards);
    };

    const setGameCardsOnStateAndSession = (cards: Card[], correctOrder?: Card[]) => {
        setTimeout(() => {
            if (correctOrder && correctOrder.length === PACK_CARDS_NUM) {
                setPlayers((prev) => {
                    return prev.map((player) => {
                        return {
                            ...player,
                            electedCards: {
                                ...player.electedCards,
                                correctOrder,
                            },
                        };
                    });
                });
            }
            setGameCards(cards);
            Session.remove(SessionKey.GAME_CARDS);
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
