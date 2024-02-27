import { useAnimate } from "framer-motion";
import { useEffect } from "react";
import {
    BTN_HEIGHT_LARGE,
    BTN_WIDTH_LARGE,
    PRIMARY_COLOR,
    SECONDARY_BORDER_RADIUS,
    TEXT_COLOR,
} from "../../style/root";

const useLoadingBtnAnimation = (activate: boolean | undefined, id: string) => {
    const [scope, animation] = useAnimate();

    const handleBtnToLoadingAnimation = async () => {
        await animation(
            `#${id}`,
            {
                backgroundColor: "rgba(85, 72, 244, 0)",
                border: "7px solid #5548F4",
                borderBottomColor: "rgba(85, 72, 244, 0)",
                width: 60,
                height: 60,
                borderRadius: "50%",
                color: "rgba(255, 255, 255, 0)",
            },
            { duration: 0.2 },
        );
        await animation(`#${id}`, { rotate: 360 }, { duration: 1, repeat: Infinity });
    };

    const handleLoadingToBtnAnimation = async () => {
        await animation(`#${id}`, { rotate: 0 }, { duration: 0.2 });
        await animation(
            `#${id}`,
            {
                backgroundColor: PRIMARY_COLOR,
                border: "2px solid #344251",
                width: BTN_WIDTH_LARGE,
                height: BTN_HEIGHT_LARGE,
                borderRadius: SECONDARY_BORDER_RADIUS,
                color: TEXT_COLOR,
            },
            { duration: 0.2 },
        );
    };

    useEffect(() => {
        //TODO: activate not activate if rivalPlayers has change
        if (activate === true) {
            handleBtnToLoadingAnimation();
        } else if (activate === false) {
            handleLoadingToBtnAnimation();
        }
    }, [activate]);

    return { scope };
};

export default useLoadingBtnAnimation;
