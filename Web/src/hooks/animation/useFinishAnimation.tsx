import { useAnimate } from "framer-motion";
import { useEffect } from "react";
import { delayPromise } from "../../utils/date";
import { useGamePlayContext } from "../../context/GamePlayContext";
import { getCorrectOrder } from "../../utils/correctOrder";
import { BELOW_ID, SHADOW_ID } from "../../models/constant";

const useFinishAnimation = (activate: boolean | undefined) => {
    const [scope, animation] = useAnimate();
    const { currentPlayer, setCorrectPack, setNextRound, setIncreaseScore } = useGamePlayContext();

    const handleAnimation = async () => {
        const { moviesInCorrectOrder, correctAnswers } = getCorrectOrder(currentPlayer);

        await animation(`#${BELOW_ID}`, { opacity: 1, display: "block" }, { duration: 0.3 });
        //TODO: border on all the cards
        await delayPromise(1000);
        // setCorrectPack(moviesInCorrectOrder);
        await animation(`#${SHADOW_ID}`, { opacity: 1, display: "block" }, { duration: 0.3 });
        if (correctAnswers > 0) {
            await delayPromise(1500);
            setIncreaseScore();
        }
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
