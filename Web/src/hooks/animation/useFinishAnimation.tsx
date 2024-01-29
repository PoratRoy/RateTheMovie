import { useAnimate } from "framer-motion";
import { useEffect } from "react";
import { delayPromise } from "../../utils/date";
import { BELOW_ID } from "../../models/constants";
import { useGamePlayContext } from "../../context/GamePlayContext";

const useFinishAnimation = (activate: boolean | undefined) => {
    const [scope, animation] = useAnimate();
    const {
        players,
        correctOrder,
        setCorrectPack,
        setPlayAgainBtn,
        setIncreaseScore,
        setRemovePosition,
    } = useGamePlayContext();

    const handleAnimation = async () => {
        await animation(`#${BELOW_ID}`, { opacity: 1, display: "block" }, { duration: 0.3 });
        await delayPromise(1000);
        setCorrectPack(correctOrder);
        const rightChoices = players[0].rightChoices;
        if(rightChoices.length > 0){
            setRemovePosition();
            await delayPromise(1500);
            //below move to score
            setIncreaseScore();
        }else{
            await delayPromise(1500);
            setPlayAgainBtn();
        }
    };

    useEffect(() => {
        if (activate) {
            handleAnimation();
        }
    }, [activate]);

    return { scope };
};

export default useFinishAnimation;
