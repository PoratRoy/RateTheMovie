import React, { useCallback } from "react";
import style from "./ToggelArrow.module.css";
import { motion } from "framer-motion";
import { getRotation, getStartIcon } from "../../../../utils/icon";
import { ToggelArrowProps } from "../../../../models/types/props/action";

const ToggelArrow: React.FC<ToggelArrowProps> = ({
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

export default ToggelArrow;
