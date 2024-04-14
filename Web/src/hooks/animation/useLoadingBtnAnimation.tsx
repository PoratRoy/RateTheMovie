import { useAnimate } from "framer-motion";
import { useEffect } from "react";
import { PRIMARY_COLOR, SECONDARY_BORDER_RADIUS, TEXT_COLOR } from "../../style/root";
import { BtnSize } from "../../models/types/union";
import { setSize } from "../../style/btn";
import { DURATION_ANIMATION_2 } from "../../models/constant/time";

const useLoadingBtnAnimation = (activate: boolean | undefined, id: string, size?: BtnSize) => {
    const [scope, animation] = useAnimate();
    const { height, width } = setSize(size);

    const handleBtnToLoadingAnimation = async () => {
        await animation(
            `#${id}`,
            {
                backgroundColor: "rgba(85, 72, 244, 0)",
                border: "7px solid #5548F4",
                borderBottomColor: "rgba(85, 72, 244, 0)",
                width: height,
                maxWidth: height,
                height,
                borderRadius: "50%",
                color: "rgba(255, 255, 255, 0)",
            },
            { duration: 0.2, ease: "linear" },
        );
        await animation(
            `#${id}`,
            { rotate: 360 },
            { duration: 1.2, ease: "linear", repeat: Infinity },
        );
    };

    const handleLoadingToBtnAnimation = async () => {
        await animation(`#${id}`, { rotate: 0 }, { duration: DURATION_ANIMATION_2 });
        await animation(
            `#${id}`,
            {
                backgroundColor: PRIMARY_COLOR,
                border: "2px solid #344251",
                width,
                maxWidth: width,
                height,
                borderRadius: SECONDARY_BORDER_RADIUS,
                color: TEXT_COLOR,
            },
            { duration: DURATION_ANIMATION_2 },
        );
    };

    useEffect(() => {
        if (activate === true) {
            handleBtnToLoadingAnimation();
        } else if (activate === false) {
            handleLoadingToBtnAnimation();
        }
    }, [activate]);

    return { scope };
};

export default useLoadingBtnAnimation;
