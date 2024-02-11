import { useGamePlayContext } from "../../context/GamePlayContext";
import { SessionKey } from "../../models/enums/session";
import { GameCard } from "../../models/types/card";
import { Movie } from "../../models/types/movie";
import { initGameCards } from "../../utils/card";
import { logMovies } from "../../utils/log";
import Session from "../../utils/sessionStorage";
import useCorrectOrder from "../useCorrectOrder";

const useHandleMovies = () => {
    const { sortMoviesPosition } = useCorrectOrder();
    const { setGameCards, setFetchLoading } = useGamePlayContext();

    const handleMovieCards = (movies: Movie[]) => {
        setFetchLoading(true);
        logMovies(movies);
        const correctPositions = sortMoviesPosition(movies);
        const cards = initGameCards(movies, correctPositions);
        setGameCardsOnStateAndSession(cards);
    };

    const handleGameCards = (cards: GameCard[]) => {
        setFetchLoading(true);
        setGameCardsOnStateAndSession(cards);
    };

    const handleGameCardsMoreData = (movies: Movie[]) => {
        let cards: GameCard[] = [];
        setGameCards((prev) => {
            return prev.map((gameCard: GameCard, index: number) => {
                const card = { ...gameCard, movie: movies[index] } as GameCard;
                cards.push(card);
                return card;
            });
        });
        Session.remove(SessionKey.GAME_CARDS);
        Session.set(SessionKey.GAME_CARDS, cards);
    };

    const setGameCardsOnStateAndSession = (cards: GameCard[]) => {
        setGameCards(cards);
        Session.remove(SessionKey.GAME_CARDS);
        Session.set(SessionKey.GAME_CARDS, cards);
        setFetchLoading(false);
        // setTimeout(() => {
        // }, 1000);
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
