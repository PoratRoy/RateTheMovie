import React from "react";
import style from "./PrimaryIconBtn.module.css";
import useLoadingBtnAnimation from "../../../../../hooks/animation/useLoadingBtnAnimation";
import { PrimaryIconBtnProps } from "../../../../../models/types/props/btn";
import { DONE_BTN_ID } from "../../../../../models/constant/ids";
import { motion } from 'framer-motion';
import { styleBtnSize } from "../../../../../style/style";


const PrimaryIconBtn: React.FC<PrimaryIconBtnProps> = ({
    id,
    title,
    onClicked,
    disabled,
    loading,
    size = "large",
}) => {
    const { scope } = useLoadingBtnAnimation(loading, id || DONE_BTN_ID, size);
    const className = styleBtnSize(style)[size];
    
    return (
        <div ref={scope}>
            <motion.button
                id={id}
                style={{ scale: 1 }}
                className={className}
                onClick={onClicked}
                disabled={disabled}
                whileTap={{ scale: 0.9 }}
            >
                {title}
            </motion.button>
        </div>
    );
};

export default PrimaryIconBtn;
