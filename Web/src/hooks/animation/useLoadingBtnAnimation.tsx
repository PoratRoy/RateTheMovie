import { useAnimate } from "framer-motion";
import { useEffect } from "react";
import { PRIMARY_COLOR, SECONDARY_BORDER_RADIUS, TEXT_COLOR } from "../../style/root";
import { BtnSize } from "../../models/types/union";
import { setSize } from "../../style/btn";

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
                height,
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
                width,
                height,
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
