import { useEffect, useMemo, useState } from "react";
import useMod from "./useMod";
import { useGameStatusContext } from "../../context/GameStatusContext";
import { useAnimationContext } from "../../context/AnimationContext";
import { START_TIMER } from "../../models/constant";
import { CardFace } from "../../models/enums/animation";

const useGameTimer = () => {
    const timeout = useMemo(() => START_TIMER * 1000 + 500, []);
    const [showTimer, setShowTimer] = useState<boolean>(true);
    const { gameStatus, setActivateTimer } = useGameStatusContext();
    const { setIsFlipCard } = useAnimationContext();
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
                }, timeout);
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
        if (isMulti() && gameStatus.isRoundStart) {
            setActivateTimer(prev => !prev);
        }
    }, [gameStatus.isRoundStart]);

    return { showTimer, closeTimer: () => setShowTimer(false) };
};

export default useGameTimer;
