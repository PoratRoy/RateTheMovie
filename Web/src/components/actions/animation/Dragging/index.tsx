import React from "react";
import style from "./Dragging.module.css";
import { FaHandRock } from "react-icons/fa";
import { motion } from "framer-motion";

const Dragging: React.FC = () => {
    return (
        <motion.div className={style.dragIconContainer}>
            <motion.div
                className={style.dragIconMotion}
                animate={{
                    y: [0, -15, 0],
                    x: [0, -10, 0],
                    transition: { duration: 2, repeat: Infinity },
                }}
            >
                <div className={style.dragIconHand}>
                    <FaHandRock />
                </div>
                <div className={style.dragIconCard} />
            </motion.div>
            <div className={style.dragIconEmpty} />
        </motion.div>
    );
};

export default Dragging;
