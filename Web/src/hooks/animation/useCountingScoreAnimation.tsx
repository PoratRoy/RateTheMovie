import { useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";
import { roundToOneDecimal } from "../../utils/calc";

const useCountingScoreAnimation = (score: number) => {
    const count = useMotionValue(score);
    const scoreRes = useTransform(count, roundToOneDecimal);

    useEffect(() => {
        if (score) {
            const animation = animate(count, score, { duration: 1.5 });
            return animation.stop;
        }
    }, [score]);

    return { scoreRes };
};

export default useCountingScoreAnimation;
