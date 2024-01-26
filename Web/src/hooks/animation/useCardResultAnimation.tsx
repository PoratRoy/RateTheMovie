import { useAnimate } from "framer-motion";
import { useEffect } from "react";
import { delayPromise } from "../../utils/date";
import { PRIMARY_COLOR } from "../../style/root";
import { ABOVE_ID, BELOW_ID, CARD_ID, PLAYER1_ID, PLAYER2_ID } from "../../models/constants";

const useCardResultAnimation = (activate: boolean | undefined, correctPlayers: string[]) => {
    const [scope, animation] = useAnimate();

    const handleAnimation = async () => {
        await animation(
            `#${ABOVE_ID}`,
            { top: -100, opacity: 1, display: "block" },
            { duration: 0.3 },
        );
        await delayPromise(2000);
        await animation(`#${CARD_ID}`, { rotateY: 180 }, { duration: 0.3 });
        await animation(
            `#${BELOW_ID}`,
            { bottom: 0, opacity: 1, display: "block" },
            { duration: 0.3 },
        );
        await delayPromise(2000);

        if (correctPlayers?.includes(PLAYER1_ID)) {

            await animation(
                `#${PLAYER1_ID}`,
                { scale: 1.1, boxShadow: `0px 0px 20px 3px ${PRIMARY_COLOR}` },
                { duration: 0.3 },
            );
            await animation(`#${PLAYER1_ID}`, { scale: 1, boxShadow: "none" }, { duration: 0.3 });

            await delayPromise(2000);
            await animation(`#${BELOW_ID}`, { y: 400, x: 300 }, { duration: 0.4 });

        }
        if (correctPlayers?.includes(PLAYER2_ID)) {

            await animation(
                `#${PLAYER2_ID}`,
                { scale: 1.1, boxShadow: `0px 0px 20px 3px ${PRIMARY_COLOR}` },
                { duration: 0.3 },
            );
            await animation(`#${PLAYER2_ID}`, { scale: 1, boxShadow: "none" }, { duration: 0.3 });

            await delayPromise(2000);
            await animation(`#${BELOW_ID}`, { y: 400, x: -300 }, { duration: 0.4 });
        }
    };

    useEffect(() => {
        if (activate) {
            handleAnimation();
        }
    }, [activate]);

    return { scope };
};

export default useCardResultAnimation;
