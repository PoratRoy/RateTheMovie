import { useGamePlayContext } from "../../context/GamePlayContext";
import { useSocketContext } from "../../context/SocketContext";
import { ElectedCards } from "../../models/types/card";
import { Movie } from "../../models/types/movie";
import { Player } from "../../models/types/player";
import { isCardsOrdrValid } from "../../utils/correctOrder";
import { getMoviesFromCards } from "../../utils/movie";
import useMod from "./useMod";

const useFinish = () => {
    const {
        setCurrentPlayer,
        currentPlayer,
        setGame,
        setPlayerFinishRound,
        setPreviewMovies,
        gameCards,
    } = useGamePlayContext();
    const { handlePlayerFinish } = useSocketContext();
    const { isMulti } = useMod();

    const finishGame = () => {
        const [isValid, { electedCardsOrder, electedCardsCorrectOrder }] =
            isCardsOrdrValid(currentPlayer);

        if (isValid) {
            setGame((prev) => ({ ...prev!, round: (prev?.currentRound ?? 1) + 1 }));
            setPlayerFinishRound(true);
            
            const movies: Movie[] = getMoviesFromCards(gameCards);
            setPreviewMovies((prev) => [...prev, ...movies]);
            
            let check = false;
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

                //TODO: setCurrentPlayer run twice, so I put the "check" variable to prevent the handlePlayerFinish run twice
                // not sure why setCurrentPlayer run twice if finishGame run only once
                if (isMulti() && !check) {
                    handlePlayerFinish(electedCards, playerScore);
                    check = true;
                }

                return {
                    ...player,
                    score: player.score + playerScore,
                    electedCards,
                };
            });
        }//TODO: if not valid
    };

    return { finishGame };
};

export default useFinish;
