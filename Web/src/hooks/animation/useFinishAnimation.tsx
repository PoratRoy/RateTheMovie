import { useAnimate } from "framer-motion";
import { useEffect } from "react";
import { delayPromise } from "../../utils/time";
import { PRIMARY_COLOR } from "../../style/root";
import useMod from "../gameplay/useMod";
import { useGamePlayContext } from "../../context/GamePlayContext";
import { useAnimationContext } from "../../context/AnimationContext";
import { useGameStatusContext } from "../../context/GameStatusContext";
import { BELOW_ID, CARD_ID, POINTS_ID, SHADOW_ID } from "../../models/constant/ids";
import { PACK_CARDS_NUM } from "../../models/constant";

const useFinishAnimation = (activate: boolean | undefined) => {
    const [scope, animation] = useAnimate();
    const { currentPlayer } = useGamePlayContext();
    const { setIsRoundFinished } = useGameStatusContext();
    const { setIncreaseScore } = useAnimationContext();
    const { isSingle } = useMod();

    const handleFinishAnimation = async () => {
        const order = currentPlayer?.electedCards.order;
        await Promise.all([
            animation(`#${BELOW_ID}`, { opacity: 1, display: "block" }, { duration: 0.3 }),
            animation(`#${CARD_ID}`, { border: `2px solid ${PRIMARY_COLOR}` }, { duration: 0.2 }),
        ]);
        await delayPromise(1000);
        for (let i = 0; i < PACK_CARDS_NUM; i++) {
            await animation(
                `#${SHADOW_ID}-${i}`,
                { opacity: 1, display: "block" },
                { duration: 0.3 },
            );
            await delayPromise(300);

            if (order && order[i]?.isCorrect === true) {
                await animation(
                    `#${POINTS_ID}-${i}`,
                    {
                        y: "-40px",
                        opacity: [0, 1, 1, 0],
                        display: ["none", "block", "block", "none"],
                    },
                    { duration: 0.8 },
                );
                setIncreaseScore((prev) => prev + 100);
            }
            await delayPromise(600);
        }
        await delayPromise(1000);
        if (isSingle()) setIsRoundFinished(true);
    };

    useEffect(() => {
        if (activate && currentPlayer?.electedCards.order.length === PACK_CARDS_NUM) {
            handleFinishAnimation();
        }
    }, [activate]);

    return { scope };
};

export default useFinishAnimation;
