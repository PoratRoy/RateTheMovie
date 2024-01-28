import { useAnimate } from "framer-motion";
import { useEffect } from "react";
import { DONE_BTN_ID } from "../../models/constants";

const useLoadingBtnAnimation = (activate: boolean | undefined) => {
    const [scope, animation] = useAnimate();

    const handleAnimation = async () => {
        await animation(
            `#${DONE_BTN_ID}`,
            {
                backgroundColor: "rgba(99, 86, 240, 0)",
                border: "7px solid #5548F4",
                borderBottomColor: "rgba(99, 86, 240, 0)",
                width: 60,
                height: 60,
                borderRadius: "50%",
                color: "rgba(99, 86, 240, 0)",
            },
            { duration: 0.2 },
        );
        await animation(`#${DONE_BTN_ID}`, { rotate: 360 }, { duration: 1, repeat: Infinity });
    };

    useEffect(() => {
        if (activate) {
            handleAnimation();
        }
    }, [activate]);

    return { scope };
};

export default useLoadingBtnAnimation;
