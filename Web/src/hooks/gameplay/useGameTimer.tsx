import { useEffect, useState } from "react";
import useMod from "./useMod";
import { useAnimationContext } from "../../context/AnimationContext";
import { START_GAME_TIMER } from "../../models/constant";
import { CardFace } from "../../models/enums/animation";
import { useGamePlayContext } from "../../context/GamePlayContext";

const useGameTimer = () => {
    const [showTimer, setShowTimer] = useState<boolean>(true);
    const { setIsFlipCard } = useAnimationContext();
    const { game, setActivateTimer } = useGamePlayContext();
    const { isSingle, isMulti } = useMod();

    useEffect(() => {
        let timer: ReturnType<typeof setTimeout>;

        if (isSingle()) {
            setShowTimer(false);
        } else {
            if (game?.isGameStart) {
                setShowTimer(true);
                setIsFlipCard(CardFace.BACK);
                timer = setTimeout(() => {
                    setActivateTimer(true);
                    setIsFlipCard(CardFace.FRONT);
                }, START_GAME_TIMER);
            } else {
                setActivateTimer(false);
                setIsFlipCard(CardFace.BACK);
            }
        }

        return () => {
            clearTimeout(timer);
        };
    }, [game?.isGameStart]);

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
