import { useAnimate } from "framer-motion";
import { useEffect } from "react";
import {
    DESCRIPTION_ID,
    FILTER_LAYOUT_ID,
    MULTIPLAYER_BTN_ID,
    PLAY_BTN_ID,
    MOVIES_POSTER_ID,
    WAVE_ID,
    MULTI_LAYOUT_ID,
    SETUP_ID,
} from "../../models/constants";
import { SetupOption } from "../../models/enums/landing";

const useLandingAnimation = (activate: SetupOption | undefined) => {
    const [scope, animation] = useAnimate();

    const handleFilterAnimation = async () => {
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

    const handleMultiAnimation = async () => {
        await animation(`#${MULTI_LAYOUT_ID}`, { opacity: 0 });
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
        await animation(`#${MULTI_LAYOUT_ID}`, { opacity: 1, display: "block" }, { duration: 0.1 });
    };

    const handleFilter2Animation = async () => {
        await animation(`#${FILTER_LAYOUT_ID}`, { opacity: 0 });
        await animation(`#${MULTI_LAYOUT_ID}`, { opacity: 0 }, { duration: 0.2 }),
            await animation(`#${MULTI_LAYOUT_ID}`, { display: "none" }),
            await animation(
                `#${FILTER_LAYOUT_ID}`,
                { opacity: 1, display: "block" },
                { duration: 0.1 },
            );
    };

    const handleSetUpAnimation = async () => {
        await animation(`#${SETUP_ID}`, { opacity: 0 });
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
            `#${SETUP_ID}`,
            { opacity: 1, display: "flex", flexDirection: "column", alignItems: "center" },
            { duration: 0.1 },
        );
    };

    useEffect(() => {
        if (activate !== undefined) {
            handleSetUpAnimation();
        }
    }, [activate]);

    // useEffect(() => {
    //     if (activate === LandingOpt.LANDING_FILTER) {
    //         handleFilterAnimation();
    //     } else if (activate === LandingOpt.LANDING_MULTI) {
    //         handleMultiAnimation();
    //     } else if (activate === LandingOpt.MULTI_FILTER) {
    //         handleFilter2Animation();
    //     }
    // }, [activate]);

    return { scope };
};

export default useLandingAnimation;
