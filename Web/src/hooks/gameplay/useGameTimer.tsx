import { useEffect, useState } from "react";
import useMod from "./useMod";
import { useGameStatusContext } from "../../context/GameStatusContext";
import { useAnimationContext } from "../../context/AnimationContext";
import { START_GAME_TIMER } from "../../models/constant";
import { CardFace } from "../../models/enums/animation";
import { useGamePlayContext } from "../../context/GamePlayContext";

const useGameTimer = () => {
    const [showTimer, setShowTimer] = useState<boolean>(true);
    const { gameStatus, setActivateTimer } = useGameStatusContext();
    const { setIsFlipCard } = useAnimationContext();
    const { game } = useGamePlayContext();
    const { isSingle, isMulti } = useMod();

    useEffect(() => {
        let timer: ReturnType<typeof setTimeout>;

        if (isSingle()) {
            setShowTimer(false);
        } else {
            if (gameStatus.isGameStart) {
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
    }, [gameStatus.isGameStart]);

    useEffect(() => {
        let timer: ReturnType<typeof setTimeout>;
        const isFirstRound = game?.currentRound === 1;
        if (isMulti() && gameStatus.isRoundStart) {
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
    }, [gameStatus.isRoundStart]);

    return { showTimer, closeTimer: () => setShowTimer(false) };
};

export default useGameTimer;
