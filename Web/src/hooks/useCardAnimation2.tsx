import { useEffect, useState } from "react";
import { delayPromise } from "../utils/date";

const useCardAnimation = (activate: boolean | undefined) => {
    const [isMoveUp, setIsMoveUp] = useState<boolean>(false);
    const [isFlipped, setIsFlipped] = useState<boolean>(false);
    const [isAnimation, setIsAnimation] = useState<boolean>(false);
    const [animationStep, setAnimationStep] = useState<number>(0);

    const onAnimationComplete = () => {
        setIsAnimation(false);
    };

    const animationOrder = async () => {
        setIsMoveUp(true);
        console.log("3");
        await delayPromise(5000);
        console.log("4");
        setAnimationStep(1);
    };

    useEffect(() => {
        const handleAnimation = async () => {
            if (animationStep === 1) {
                setIsFlipped(true);
            } else {
                await animationOrder();
            }
        };

        if (activate && animationStep === 0) {
            handleAnimation();
        }

        return () => {
            setIsMoveUp(false);
            setIsFlipped(false);
            setAnimationStep(0);
        };
    }, [activate, animationStep]);

    return { isMoveUp, isFlipped, onAnimationComplete };
};

export default useCardAnimation;

// useEffect(() => {
//     if (activate && !isAnimation) {
//         setIsAnimation(true);
//         setIsFlipped(true);
//     }
// }, [activate]);
