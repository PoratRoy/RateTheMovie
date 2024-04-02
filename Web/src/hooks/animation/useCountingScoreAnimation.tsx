import { useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";
import { roundToOneDecimal } from "../../utils/calc";
import { DURATION_ANIMATION_5 } from "../../models/constant/time";

const useCountingScoreAnimation = (score: number) => {
    const count = useMotionValue(score);
    const scoreRes = useTransform(count, roundToOneDecimal);

    useEffect(() => {
        if (score >= 0) {
            const animation = animate(count, score, { duration: DURATION_ANIMATION_5 });
            return animation.stop;
        }
    }, [score]);

    return { scoreRes };
};

export default useCountingScoreAnimation;
