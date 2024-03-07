import { useGamePlayContext } from "../../context/GamePlayContext";
import { ElectedCards } from "../../models/types/card";
import { Player } from "../../models/types/player";
import { isCardsOrdrValid } from "../../utils/correctOrder";

const useFinish = () => {
    const { setCurrentPlayer, currentPlayer, setGame } = useGamePlayContext();

    const finishGame = () => {
        setGame((prev) => ({ ...prev!, round: (prev?.currentRound ?? 1) + 1 }));

        const [isValid, { electedCardsOrder, electedCardsCorrectOrder }] =
            isCardsOrdrValid(currentPlayer);

        if (isValid) {
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

                return {
                    ...player,
                    score: player.score + playerScore,
                    electedCards,
                };
            });
        }
    };

    return { finishGame };
};

export default useFinish;
