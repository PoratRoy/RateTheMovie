import { useAnimate } from "framer-motion";
import { useEffect } from "react";
import { delayPromise } from "../../utils/date";
import { BELOW_ID, CARD_ID, SHADOW_ID } from "../../models/constant";
import { PRIMARY_COLOR } from "../../style/root";
import { useAnimationContext } from "../../context/AnimationContext";

const useFinishAnimation = (activate: boolean | undefined) => {
    const [scope, animation] = useAnimate();
    const { setNextRound } = useAnimationContext();

    const handleAnimation = async () => {
        await Promise.all([
            animation(`#${BELOW_ID}`, { opacity: 1, display: "block" }, { duration: 0.3 }),
            animation(`#${CARD_ID}`, { border: `2px solid ${PRIMARY_COLOR}` }, { duration: 0.2 }),
        ]);
        await delayPromise(1000);
        await animation(`#${SHADOW_ID}`, { opacity: 1, display: "block" }, { duration: 0.3 });
        await delayPromise(1500);
        setNextRound();
    };

    useEffect(() => {
        if (activate) {
            handleAnimation();
        }
    }, [activate]);

    return { scope };
};

export default useFinishAnimation;

// const { moviesInCorrectOrder, correctAnswers } = getCorrectOrder(currentPlayer);
// setCorrectPack(moviesInCorrectOrder);
// if (correctAnswers > 0) {
//     await delayPromise(1500);
//     setIncreaseScore();
// }
