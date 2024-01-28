import { useAnimate } from "framer-motion";
import { useEffect } from "react";
import { delayPromise } from "../../utils/date";
import { BELOW_ID } from "../../models/constants";
import { useGamePlayContext } from "../../context/GamePlayContext";
import { Movie } from "../../models/types/movie";
import useSetScore from "../useSetScore";

const useFinishAnimation = (activate: boolean | undefined) => {
    const [scope, animation] = useAnimate();
    const { players, correctOrder, setCorrectPack, setPlayAgainBtn } = useGamePlayContext();
    const { setScore } = useSetScore();

    const rightChoices = players[0]?.rightChoices;

    const handleAnimation = async () => {
        await animation(`#${BELOW_ID}`, { opacity: 1, display: "block" }, { duration: 0.3 });
        await delayPromise(1000);
        setCorrectPack(correctOrder);
        await delayPromise(500);
        const animationPromises = rightChoices.map(async (movie: Movie) => {
            await animation(`#${movie.imdbID}`, { opacity: 0 }, { duration: 0.3 });
        });
        await Promise.all(animationPromises);
        //below move to score
        setScore();
        await delayPromise(1500);
        setPlayAgainBtn(true);
    };

    useEffect(() => {
        if (activate) {
            handleAnimation();
        }
    }, [activate]);

    return { scope };
};

export default useFinishAnimation;
