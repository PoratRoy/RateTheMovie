import React, { useCallback } from "react";
import style from "./ToggleArrow.module.css";
import { motion } from "framer-motion";
import { getRotation, getStartIcon } from "../../../../../utils/icon";
import { ToggleArrowProps } from "../../../../../models/types/props/action";

const ToggleArrow: React.FC<ToggleArrowProps> = ({
    isOpen,
    handleOnClick,
    startDirection,
    endDirection,
    size = "large",
}) => {
    let IconStartDirection = useCallback(() => getStartIcon(startDirection), [handleOnClick]);
    let rotate = useCallback(() => getRotation(startDirection, endDirection), [handleOnClick]);

    const className =
        size === "large"
            ? style.toggelArrowLarge
            : size === "medium"
              ? style.toggelArrowMedium
              : style.toggelArrowSmall; //TODOCSS: refactor

    return (
        <span className={className} onClick={handleOnClick}>
            <motion.div
                className={style.toggelArrowAnimation}
                animate={{ rotate: isOpen ? rotate() : 0 }}
                transition={{ duration: 0.2 }}
            >
                {IconStartDirection()}
            </motion.div>
        </span>
    );
};

export default ToggleArrow;
