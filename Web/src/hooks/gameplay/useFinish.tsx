import { useRef } from "react";
import { useGamePlayContext } from "../../context/GamePlayContext";
import { useSocketContext } from "../../context/SocketContext";
import { initGameCardsList } from "../../models/initialization/card";
import { Card, ElectedCards } from "../../models/types/card";
import { Movie } from "../../models/types/movie";
import { Player } from "../../models/types/player";
import { isCardsOrdrValid } from "../../utils/correctOrder";
import useMod from "./useMod";

const useFinish = () => {
    const {
        setCurrentPlayer,
        currentPlayer,
        setPreviewMovies,
        gameCards,
        setIsPlayerFinishRound,
        setIsRoundFinished,
        setIsRoundStart,
        setActivateTimer,
    } = useGamePlayContext();
    const { handlePlayerFinish } = useSocketContext();
    const { isMulti } = useMod();
    const checkRef = useRef<any>(false);

    const setNewRoundStatus = () => {
        setIsPlayerFinishRound(true);
        setIsRoundFinished(false);
        setIsRoundStart(false);
        setActivateTimer(false);

        setPreviewMovies((prev) => {
            let filteredMovies: Movie[] = [];
            gameCards.forEach((card: Card) => {
                if (!prev.some((prevMovie) => prevMovie.id === card.movie.id)) {
                    filteredMovies.push(card.movie);
                }
            });
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
