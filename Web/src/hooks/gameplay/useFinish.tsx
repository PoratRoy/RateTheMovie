import { useRef } from "react";
import { useGamePlayContext } from "../../context/GamePlayContext";
import { useSocketContext } from "../../context/SocketContext";
import { initGameCardsList } from "../../models/initialization/card";
import { ElectedCards } from "../../models/types/card";
import { Player } from "../../models/types/player";
import { isCardsOrdrValid } from "../../utils/correctOrder";
import useMod from "./useMod";
import Session from "../../utils/storage/sessionStorage";
import { SessionKey } from "../../models/enums/session";
import { useAnimationContext } from "../../context/AnimationContext";

const useFinish = () => {
    const {
        currentPlayer,
        setCurrentPlayer,
        insertMoviesToPreview,
        setIsRoundFinished,
        setIsRoundStart,
        setActivateTimer,
        setIsPlayerFinishRound,
    } = useGamePlayContext();
    const { handlePlayerFinish } = useSocketContext();
    const { setActivateFinishAnimation } = useAnimationContext();
    const { isMulti } = useMod();
    const checkRef = useRef<any>(false);

    const setNewRoundStatus = () => {
        setIsRoundFinished(false);
        setIsRoundStart(false);
        setActivateTimer(false);
        insertMoviesToPreview();
    };

    const finishGame = () => {
        const [isValid, { electedCardsOrder, electedCardsCorrectOrder }] =
            isCardsOrdrValid(currentPlayer);

        if (isValid) {
            setNewRoundStatus();
            setActivateFinishAnimation(true);

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

                const currentPlayer: Player = {
                    ...player,
                    score: player.score + playerScore,
                    electedCards,
                };
                Session.set(SessionKey.CURRENT_PLAYER, currentPlayer);
                return currentPlayer;
            });
        } else {
            setNewRoundStatus();
            setIsPlayerFinishRound(true);
            setActivateFinishAnimation(false);

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
