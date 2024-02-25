import { useAnimate } from "framer-motion";
import { useEffect } from "react";
import { delayPromise } from "../../utils/date";
import { useGamePlayContext } from "../../context/GamePlayContext";
import { getCorrectOrder } from "../../utils/correctOrder";
import { BELOW_ID, SHADOW_ID } from "../../models/constant";

const useFinishAnimation = (activate: boolean | undefined) => {
    const [scope, animation] = useAnimate();
    const { currentPlayer, setCorrectPack, setPlayAgainBtn, setIncreaseScore, setRemovePosition } =
        useGamePlayContext();

    const handleAnimation = async () => {
        const { moviesInCorrectOrder, correctAnswers } = getCorrectOrder(currentPlayer);
        
        await animation(`#${BELOW_ID}`, { opacity: 1, display: "block" }, { duration: 0.3 });
        await delayPromise(1000);
        setCorrectPack(moviesInCorrectOrder);
        await animation(`#${SHADOW_ID}`, { opacity: 1, display: "block" }, { duration: 0.3 });
        if (correctAnswers > 0) {
            setRemovePosition();
            await delayPromise(1500);
            //below move to score
            setIncreaseScore();
        }
        await delayPromise(1500);
        setPlayAgainBtn();
    };

    useEffect(() => {
        if (activate) {
            handleAnimation();
        }
    }, [activate]);

    return { scope };
};

export default useFinishAnimation;

// const correctChoices: boolean[] = electedCardsOrder
// .map((card) => card?.correct)
// .filter((value): value is boolean => value !== undefined);

// // TODO: extract to function
// const filteredCards = gameCards.filter(card => card.correctPosition !== -1);
// filteredCards.sort((a, b) => (a.correctPosition! - b.correctPosition!));
// const moviesInCorrectOrder = filteredCards.map(card => card.movie);

// electedCardsCorrectOrder?.map((card) => card.movie);
//         if (
//             electedCardsOrder &&
//             electedCardsCorrectOrder &&
//             electedCardsOrder.length !== 0 &&
//             electedCardsCorrectOrder.length !== 0 &&
//             electedCardsOrder.length === electedCardsCorrectOrder.length
//         ) {
//             for (let i = 0; i < electedCardsOrder.length; i++) {
//                 if(electedCardsOrder[i]?.movie === electedCardsCorrectOrder[i]?.movie) {
//                     moviesInCorrectOrder.push(electedCardsCorrectOrder[i]?.movie);
//                 }
//             }
//         }
