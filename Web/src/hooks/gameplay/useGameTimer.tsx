import { useEffect, useState } from "react";
import useMod from "./useMod";
import { useAnimationContext } from "../../context/AnimationContext";
import { START_GAME_TIMER } from "../../models/constant/time";
import { CardFace } from "../../models/enums/animation";
import { useGamePlayContext } from "../../context/GamePlayContext";

const useGameTimer = () => {
    const [showTimer, setShowTimer] = useState<boolean>(false);
    const { setIsFlipCard } = useAnimationContext();
    const { game, setActivateTimer } = useGamePlayContext();
    const { isSingle, isMulti } = useMod();

    useEffect(() => {
        let timer: ReturnType<typeof setTimeout>;

        if (isSingle()) {
            setShowTimer(false);
        } else {
            if (game) {
                const { isRefreshed, isPlayerFinishRound, isGameStart, currentRound } = game;
                if (isRefreshed) {
                    const face = isPlayerFinishRound ? CardFace.BACK : CardFace.FRONT;
                    setTimerAndCardFace(false, face);
                } else {
                    if (isGameStart) {
                        if (currentRound === 1) {
                            setTimerAndCardFace(true, CardFace.BACK);
                            timer = setTimeout(() => {
                                setTimerAndCardFace(true, CardFace.FRONT);
                            }, START_GAME_TIMER);
                        }
                    } else {
                        setTimerAndCardFace(false, CardFace.BACK);
                    }
                }
            }
        }

        return () => {
            clearTimeout(timer);
        };
    }, [game?.isGameStart, game?.isRefreshed, game?.currentRound]);

    const setTimerAndCardFace = (isTimer: boolean, cardFace: CardFace) => {
        setShowTimer(isTimer);
        setIsFlipCard(cardFace);
    };

    useEffect(() => {
        let timer: ReturnType<typeof setTimeout>;
        const isFirstRound = game?.currentRound === 1;
        if (isMulti() && game?.isRoundStart) {
            if (isFirstRound) {
                timer = setTimeout(() => {
                    setActivateTimer(true);
                }, START_GAME_TIMER);
            } else {
                setActivateTimer(true);
            }
        }

        return () => {
            clearTimeout(timer);
        };
    }, [game?.isRoundStart]);

    return { showTimer, closeTimer: () => setShowTimer(false) };
};

export default useGameTimer;
