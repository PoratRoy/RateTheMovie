import { useGamePlayContext } from "../../context/GamePlayContext";
import { useSocketContext } from "../../context/SocketContext";
import { PACK_CARDS_NUM } from "../../models/constant";
import { ModOption } from "../../models/enums/game";
import { SessionKey } from "../../models/enums/session";
import { Card } from "../../models/types/card";
import { Movie } from "../../models/types/movie";
import { Player } from "../../models/types/player";
import { initGameCards } from "../../utils/card";
import { logMovies } from "../../utils/log";
import Session from "../../utils/storage/sessionStorage";
import useCorrectOrder from "./useCorrectOrder";
import useMod from "./useMod";

const useHandleMovies = () => {
    const { sortMoviesOrder, sortCardsOrder } = useCorrectOrder();
    const { setGameCards, setCurrentPlayer } = useGamePlayContext();
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
        return cards;
    };

    const handleGameCards = (cards: Card[]) => {
        const correctOrder = sortCardsOrder(cards);
        setGameCardsOnStateAndSession(cards, correctOrder);
    };

    const setGameCardsOnStateAndSession = (cards: Card[], correctOrder?: string[]) => {
        if (correctOrder && correctOrder.length === PACK_CARDS_NUM) {
            setCurrentPlayer((player) => {
                if (!player) return player;
                const currentPlayer: Player = {
                    ...player,
                    electedCards: {
                        ...player.electedCards,
                        correctOrder,
                    },
                };
                Session.set(SessionKey.CURRENT_PLAYER, currentPlayer);
                return currentPlayer;
            });
        }
        setGameCards(cards);
    };

    return {
        handleMovieCards,
        handleGameCards,
    };
};

export default useHandleMovies;
