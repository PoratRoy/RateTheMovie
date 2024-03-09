import { useAnimate } from "framer-motion";
import { useEffect } from "react";
import { delayPromise } from "../../utils/date";
import {
    REVEAL_ACTION_ID,
    SCORE_ID,
    GAMEOVER_BOARD_ID,
    NEXT_ROUND_BTN_ID,
} from "../../models/constant";

const useMultiGameOverAnimation = (activate: boolean) => {
    const [scope, animation] = useAnimate();

    const handleFinishAnimation = async () => {
        await animation(`#${GAMEOVER_BOARD_ID}`, { opacity: 0 }, { duration: 0.1 }),
            delayPromise(2000);
        await Promise.all([
            animation(`#${REVEAL_ACTION_ID}`, { opacity: 0 }, { duration: 0.2 }),
            animation(`#${SCORE_ID}`, { opacity: 0 }, { duration: 0.2 }),
        ]);
        await Promise.all([
            animation(`#${REVEAL_ACTION_ID}`, { display: "none" }),
            animation(`#${SCORE_ID}`, { display: "none" }),
        ]);
        await Promise.all([
            animation(
                `#${GAMEOVER_BOARD_ID}`,
                { opacity: 1, display: "flex", flexDirection: "column", alignItems: "center" },
                { duration: 0.3 },
            ),
            animation(
                `#${NEXT_ROUND_BTN_ID}`,
                { opacity: 1, display: "flex", flexDirection: "column", alignItems: "center" },
                { duration: 0.3 },
            ),
        ]);
    };

    useEffect(() => {
        if (activate) {
            handleFinishAnimation();
        }
    }, [activate]);

    return { scope };
};

export default useMultiGameOverAnimation;
