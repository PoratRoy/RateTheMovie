import { useAnimate } from "framer-motion";
import { useEffect } from "react";
import { delayPromise } from "../../utils/time";
import { DOUBLE_CLICK_ID, DRAGGING_ID, SHADOW_CARD_TITLE_ID } from "../../models/constant/ids";
import { CardAnimation } from "../../models/types/union";
import { DELAY_ANIMATION_30, DURATION_ANIMATION_3 } from "../../models/constant/time";

const useCardShadowAnimation = (actions: CardAnimation[]) => {
    const [scope, animation] = useAnimate();

    const handleAnimation = async () => {
        try {
            await animation(`#${DOUBLE_CLICK_ID}`, { opacity: 0 });
            await animation(`#${SHADOW_CARD_TITLE_ID}`, { opacity: 0 });
            await animation(`#${SHADOW_CARD_TITLE_ID}`, { opacity: 0 });
            if (actions.includes("dragging")) {
                await animation(
                    `#${DRAGGING_ID}`,
                    { opacity: 1, display: "block" },
                    { duration: DURATION_ANIMATION_3 },
                );
                await delayPromise(DELAY_ANIMATION_30);
                await animation(`#${DRAGGING_ID}`, { opacity: 0 });
            }
            if (actions.includes("doubleClick")) {
                await animation(
                    `#${DOUBLE_CLICK_ID}`,
                    { opacity: 1, display: "block" },
                    { duration: DURATION_ANIMATION_3 },
                );
                await delayPromise(DELAY_ANIMATION_30);
                await animation(`#${DOUBLE_CLICK_ID}`, { opacity: 0 });
            }
            if (actions.includes("title")) {
                await animation(
                    `#${SHADOW_CARD_TITLE_ID}`,
                    { opacity: 1, display: "block" },
                    { duration: DURATION_ANIMATION_3 },
                );
            }
        } catch (error) {}
    };

    useEffect(() => {
        handleAnimation();
    }, []);

    return { scope };
};

export default useCardShadowAnimation;
