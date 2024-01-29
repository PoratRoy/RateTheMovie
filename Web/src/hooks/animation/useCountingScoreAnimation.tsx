import { useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";
import { roundToOneDecimal } from "../../utils/calc";

const useCountingScoreAnimation = (
    score: number,
    activate: boolean,
    handleComplete: () => void,
) => {
    const count = useMotionValue(score);
    const scoreRes = useTransform(count, roundToOneDecimal);

    useEffect(() => {
        if (activate) {
            const animation = animate(count, score, {
                duration: 2,
                onComplete: handleComplete,
            });

            return animation.stop;
        }
    }, [activate]);

    return { scoreRes };
};

export default useCountingScoreAnimation;
