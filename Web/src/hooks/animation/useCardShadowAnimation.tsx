import { useAnimate } from "framer-motion";
import { useEffect } from "react";
import { delayPromise } from "../../utils/time";
import { DOUBLE_CLICK_ID, DRAGGING_ID, SHADOW_CARD_TITLE_ID } from "../../models/constant";
import { CardAnimation } from "../../models/enums/animation";

const useCardShadowAnimation = (actions: CardAnimation[]) => {
    const [scope, animation] = useAnimate();

    const handleAnimation = async () => {
        try {
            await animation(`#${DOUBLE_CLICK_ID}`, { opacity: 0 });
            await animation(`#${SHADOW_CARD_TITLE_ID}`, { opacity: 0 });
            await animation(`#${SHADOW_CARD_TITLE_ID}`, { opacity: 0 });
            if (actions.includes(CardAnimation.DRAGGING)) {
                await animation(
                    `#${DRAGGING_ID}`,
                    { opacity: 1, display: "block" },
                    { duration: 0.3 },
                );
                await delayPromise(3000);
                await animation(`#${DRAGGING_ID}`, { opacity: 0 });
            }
            if (actions.includes(CardAnimation.DOUBLE_CLICK)) {
                await animation(
                    `#${DOUBLE_CLICK_ID}`,
                    { opacity: 1, display: "block" },
                    { duration: 0.3 },
                );
                await delayPromise(3000);
                await animation(`#${DOUBLE_CLICK_ID}`, { opacity: 0 });
            }
            if (actions.includes(CardAnimation.TITLE)) {
                await animation(
                    `#${SHADOW_CARD_TITLE_ID}`,
                    { opacity: 1, display: "block" },
                    { duration: 0.3 },
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
