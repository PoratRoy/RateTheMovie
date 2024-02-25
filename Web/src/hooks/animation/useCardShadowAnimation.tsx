import { useAnimate } from "framer-motion";
import { useEffect } from "react";
import { delayPromise } from "../../utils/date";
import { DOUBLE_CLICK_ID, DRAGGING_ID, SHADOW_CARD_TITLE_ID } from "../../models/constant";

const useCardShadowAnimation = () => {
    const [scope, animation] = useAnimate();

    const handleAnimation = async () => {
        await animation(`#${DOUBLE_CLICK_ID}`, { opacity: 0 });
        await animation(`#${SHADOW_CARD_TITLE_ID}`, { opacity: 0 });
        await animation(`#${DRAGGING_ID}`, { opacity: 1, display: "block" }, { duration: 0.3 });
        await delayPromise(3000);
        await animation(`#${DRAGGING_ID}`, { opacity: 0 });
        await animation(`#${DOUBLE_CLICK_ID}`, { opacity: 1, display: "block" }, { duration: 0.3 });
        await delayPromise(3000);
        await animation(`#${DOUBLE_CLICK_ID}`, { opacity: 0 });
        await animation(
            `#${SHADOW_CARD_TITLE_ID}`,
            { opacity: 1, display: "block" },
            { duration: 0.3 },
        );
    };

    useEffect(() => {
        handleAnimation();
    }, []);

    return { scope };
};

export default useCardShadowAnimation;
