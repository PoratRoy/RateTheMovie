import React from "react";
import style from "./ToggelArrow.module.css";
import { IoIosArrowForward } from "react-icons/io";
import { ToggelArrowProps } from "../../../../models/types/props/common";
import { motion } from "framer-motion";

const ToggelArrow: React.FC<ToggelArrowProps> = ({ isOpen, handleOnClick }) => {
    return (
        <span className={style.toggelArrow} onClick={handleOnClick}>
            <motion.div animate={{ rotate: isOpen ? 90 : 0 }} transition={{ duration: 0.2 }}>
                <IoIosArrowForward />
            </motion.div>
        </span>
    );
};

export default ToggelArrow;
