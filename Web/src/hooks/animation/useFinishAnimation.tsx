import { useAnimate } from "framer-motion";
import { useEffect } from "react";
import { delayPromise } from "../../utils/time";
import { PRIMARY_COLOR } from "../../style/root";
import { useGamePlayContext } from "../../context/GamePlayContext";
import { useAnimationContext } from "../../context/AnimationContext";
import { BELOW_ID, CARD_ID, POINTS_ID, SHADOW_ID } from "../../models/constant/ids";
import { PACK_CARDS_NUM, POINTS } from "../../models/constant";
import {
    DELAY_ANIMATION_3,
    DELAY_ANIMATION_4,
    DURATION_ANIMATION_2,
    DURATION_ANIMATION_3,
    DURATION_ANIMATION_8,
    SECOND_TIME,
} from "../../models/constant/time";
import useMod from "../gameplay/useMod";
import { useSocketContext } from "../../context/SocketContext";

const useFinishAnimation = (activate: boolean | undefined) => {
    const [scope, animation] = useAnimate();
    const { handlePlayerFinish } = useSocketContext();
    const { currentPlayer, setIsPlayerFinishRound, setIsRoundFinished } = useGamePlayContext();
    const { setIncreaseScore, setActivateFinishAnimation } = useAnimationContext();
    const { isMulti } = useMod();

    const handleFinishAnimation = async () => {
        const order = currentPlayer?.electedCards.order;
        try {
            await Promise.all([
                animation(
                    `#${BELOW_ID}`,
                    { opacity: 1, display: "block" },
                    { duration: DURATION_ANIMATION_3 },
                ),
                animation(
                    `#${CARD_ID}`,
                    { border: `2px solid ${PRIMARY_COLOR}` },
                    { duration: DURATION_ANIMATION_2 },
                ),
            ]);
            await delayPromise(SECOND_TIME);

            for (let i = 0; i < PACK_CARDS_NUM; i++) {
                await animation(
                    `#${SHADOW_ID}-${i}`,
                    { opacity: 1, display: "block" },
                    { duration: DURATION_ANIMATION_3 },
                );
                await delayPromise(DELAY_ANIMATION_3);

                if (order && order[i]?.isCorrect === true) {
                    await animation(
                        `#${POINTS_ID}-${i}`,
                        {
                            y: "-40px",
                            opacity: [0, 1, 1, 0],
                            display: ["none", "block", "block", "none"],
                        },
                        { duration: DURATION_ANIMATION_8 },
                    );
                    setIncreaseScore((prev) => (prev || 0) + POINTS);
                }
                await delayPromise(DELAY_ANIMATION_4);
            }
        } catch (error) {}
        await delayPromise(SECOND_TIME);

        setIsPlayerFinishRound(true);
        setActivateFinishAnimation(false);

        if (isMulti() && currentPlayer) {
            const { score, electedCards } = currentPlayer;
            handlePlayerFinish(electedCards, score);
        } else {
            setIsRoundFinished(true);
        }
    };

    useEffect(() => {
        if (activate && currentPlayer?.electedCards.order.length === PACK_CARDS_NUM) {
            handleFinishAnimation();
        }
    }, [activate]);

    return { scope };
};

export default useFinishAnimation;
