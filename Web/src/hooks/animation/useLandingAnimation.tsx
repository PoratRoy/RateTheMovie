import { useAnimate } from "framer-motion";
import { useEffect } from "react";
import { SetupOption } from "../../models/types/setup";
import useMod from "../gameplay/useMod";
import {
    DESCRIPTION_ID,
    MOVIES_POSTER_ID,
    MULTIPLAYER_BTN_ID,
    PLAY_BTN_ID,
    SETUP_ID,
    WAVE_ID,
} from "../../models/constant/ids";
import { DURATION_ANIMATION_1, DURATION_ANIMATION_2 } from "../../models/constant/time";

const useLandingAnimation = (activate: SetupOption) => {
    const [scope, animation] = useAnimate();
    const { isNoneMode } = useMod();

    const handleToLandingAnimation = async () => {
        await animation(`#${SETUP_ID}`, { opacity: 0 }, { duration: DURATION_ANIMATION_1 }),
            await Promise.all([
                animation(`#${PLAY_BTN_ID}`, { opacity: 1 }, { duration: DURATION_ANIMATION_1 }),
                animation(`#${DESCRIPTION_ID}`, { opacity: 1 }, { duration: DURATION_ANIMATION_1 }),
                animation(
                    `#${MULTIPLAYER_BTN_ID}`,
                    { opacity: 1 },
                    { duration: DURATION_ANIMATION_1 },
                ),
                animation(`#${WAVE_ID}`, { height: "65vh" }, { duration: DURATION_ANIMATION_1 }),
            ]);
        await animation(`#${SETUP_ID}`, { display: "none" }),
            await Promise.all([
                animation(`#${PLAY_BTN_ID}`, { display: "flex" }),
                animation(`#${DESCRIPTION_ID}`, { display: "block" }),
                animation(`#${MULTIPLAYER_BTN_ID}`, { display: "flex" }),
                animation(`#${MOVIES_POSTER_ID}`, { display: "block" }),
            ]);
    };

    const handleToSetupAnimation = async () => {
        await animation(`#${SETUP_ID}`, { opacity: 0 });
        await Promise.all([
            animation(`#${DESCRIPTION_ID}`, { opacity: 0 }, { duration: DURATION_ANIMATION_2 }),
            animation(`#${MULTIPLAYER_BTN_ID}`, { opacity: 0 }, { duration: DURATION_ANIMATION_2 }),
        ]);
        await Promise.all([
            animation(`#${PLAY_BTN_ID}`, { opacity: 0 }, { duration: DURATION_ANIMATION_1 }),
            animation(`#${WAVE_ID}`, { height: "100%" }, { duration: DURATION_ANIMATION_1 }),
        ]);
        await Promise.all([
            animation(`#${PLAY_BTN_ID}`, { display: "none" }),
            animation(`#${DESCRIPTION_ID}`, { display: "none" }),
            animation(`#${MULTIPLAYER_BTN_ID}`, { display: "none" }),
            animation(`#${MOVIES_POSTER_ID}`, { display: "none" }),
        ]);
        await animation(
            `#${SETUP_ID}`,
            { opacity: 1, display: "flex", flexDirection: "column", alignItems: "center" },
            { duration: DURATION_ANIMATION_1 },
        );
    };

    useEffect(() => {
        if (isNoneMode(activate.mod)) {
            handleToLandingAnimation();
        } else {
            handleToSetupAnimation();
        }
    }, [activate]);

    return { scope };
};

export default useLandingAnimation;
