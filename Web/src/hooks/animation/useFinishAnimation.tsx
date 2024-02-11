import { useAnimate } from "framer-motion";
import { useEffect } from "react";
import { delayPromise } from "../../utils/date";
import { BELOW_ID, SHADOW_ID } from "../../models/constants";
import { useGamePlayContext } from "../../context/GamePlayContext";

const useFinishAnimation = (activate: boolean | undefined) => {
    const [scope, animation] = useAnimate();
    const {
        players,
        gameCards,
        setCorrectPack,
        setPlayAgainBtn,
        setIncreaseScore,
        setRemovePosition,
    } = useGamePlayContext();

    const handleAnimation = async () => {
        await animation(`#${BELOW_ID}`, { opacity: 1, display: "block" }, { duration: 0.3 });
        await delayPromise(1000);
        // TODO: extract to function
        const filteredCards = gameCards.filter(card => card.correctPosition !== -1);
        filteredCards.sort((a, b) => (a.correctPosition! - b.correctPosition!));
        const moviesInCorrectOrder = filteredCards.map(card => card.movie);

        setCorrectPack(moviesInCorrectOrder);
        await animation(`#${SHADOW_ID}`, { opacity: 1, display: "block" }, { duration: 0.3 });
        const electedCards = players[0].electedCards;
        //TODO: extract to function
        const correctChoices: boolean[] = electedCards
            .map((card) => card?.correct)
            .filter((value): value is boolean => value !== undefined);
        if (correctChoices.length > 0) {
            setRemovePosition();
            await delayPromise(1500);
            //below move to score
            setIncreaseScore();
        } else {
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
