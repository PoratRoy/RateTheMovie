import { useAnimate } from "framer-motion";
import { useEffect } from "react";
import {
    DESCRIPTION_ID,
    FILTER_LAYOUT_ID,
    MULTIPLAYER_BTN_ID,
    PLAY_BTN_ID,
    MOVIES_POSTER_ID,
    WAVE_ID,
} from "../../models/constants";

const useLandingAnimation = (activate: boolean | undefined) => {
    const [scope, animation] = useAnimate();

    const handleAnimation = async () => {
        await animation(`#${FILTER_LAYOUT_ID}`, { opacity: 0 });
        await Promise.all([
            animation(`#${DESCRIPTION_ID}`, { opacity: 0 }, { duration: 0.2 }),
            animation(`#${MULTIPLAYER_BTN_ID}`, { opacity: 0 }, { duration: 0.2 }),
        ]);
        await Promise.all([
            animation(`#${PLAY_BTN_ID}`, { y: 200 }, { duration: 0.1 }),
            animation(`#${WAVE_ID}`, { height: "100%" }, { duration: 0.1 }),
        ]);
        await Promise.all([
            animation(`#${DESCRIPTION_ID}`, { display: "none" }),
            animation(`#${MULTIPLAYER_BTN_ID}`, { display: "none" }),
            animation(`#${MOVIES_POSTER_ID}`, { display: "none" }),
        ]);
        await animation(
            `#${FILTER_LAYOUT_ID}`,
            { opacity: 1, display: "block" },
            { duration: 0.1 },
        );
    };

    useEffect(() => {
        if (activate) {
            handleAnimation();
        }
    }, [activate]);

    return { scope };
};

export default useLandingAnimation;
