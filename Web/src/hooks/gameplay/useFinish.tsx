import { useRef } from "react";
import { useGamePlayContext } from "../../context/GamePlayContext";
import { useSocketContext } from "../../context/SocketContext";
import { initGameCardsList } from "../../models/initialization/card";
import { ElectedCards } from "../../models/types/card";
import { Movie } from "../../models/types/movie";
import { Player } from "../../models/types/player";
import { isCardsOrdrValid } from "../../utils/correctOrder";
import { getMoviesFromCards } from "../../utils/movie";
import useMod from "./useMod";
import { useGameStatusContext } from "../../context/GameStatusContext";

const useFinish = () => {
    const { setCurrentPlayer, currentPlayer, setGame, setPreviewMovies, gameCards } =
        useGamePlayContext();
    const { handlePlayerFinish } = useSocketContext();
    const { setIsPlayerFinishRound, setIsRoundFinished, setIsRoundStart, setActivateTimer } =
        useGameStatusContext();
    const { isMulti } = useMod();
    const checkRef = useRef<any>(false);

    const setNewRoundStatus = () => {
        setGame((prev) => ({ ...prev!, round: (prev?.currentRound ?? 1) + 1 }));
        setIsPlayerFinishRound(true);
        setIsRoundFinished(false);
        setIsRoundStart(false);
        setActivateTimer(false);

        const movies: Movie[] = getMoviesFromCards(gameCards);
        setPreviewMovies(prev => {
            const filteredMovies = movies.filter(movie => !prev.some(prevMovie => prevMovie.id === movie.id));
            return [...prev, ...filteredMovies];
        });
    };

    const finishGame = () => {
        const [isValid, { electedCardsOrder, electedCardsCorrectOrder }] =
            isCardsOrdrValid(currentPlayer);
        if (isValid) {
            setNewRoundStatus();

            checkRef.current = false;
            setCurrentPlayer((player: Player | undefined) => {
                let playerScore = 0;
                if (!player) return player;
                const electedCards = { ...player.electedCards } as ElectedCards;

                for (let i = 0; i < electedCardsOrder.length; i++) {
                    const card = electedCardsOrder[i];
                    if (card && card.movie.id === electedCardsCorrectOrder[i]) {
                        let order = electedCards.order[i];
                        if (order) {
                            order.isCorrect = true;
                            playerScore += 100;
                        }
                    }
                }

                if (isMulti() && !checkRef.current) {
                    handlePlayerFinish(electedCards, playerScore);
                    checkRef.current = true;
                }

                return {
                    ...player,
                    score: player.score + playerScore,
                    electedCards,
                };
            });
        } else {
            setNewRoundStatus();

            let check = false;
            if (isMulti() && !check) {
                const electedCards = { order: initGameCardsList() } as ElectedCards;
                handlePlayerFinish(electedCards, 0);
                check = true;
            }
        }
    };

    return { finishGame };
};

export default useFinish;
