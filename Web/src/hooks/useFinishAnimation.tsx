import { useAnimate } from "framer-motion";
import { useEffect } from "react";
import { delayPromise } from "../utils/date";
import { BELOW_ID } from "../models/constants";

const useFinishAnimation = (activate: boolean | undefined) => {
    const [scope, animation] = useAnimate();

    const handleAnimation = async () => {
        await delayPromise(2000);
        await animation(`#${BELOW_ID}`, { opacity: 1, display: "block" }, { duration: 0.3 });
    };

    useEffect(() => {
        if (activate) {
            handleAnimation();
        }
    }, [activate]);

    return { scope };
};

export default useFinishAnimation;
