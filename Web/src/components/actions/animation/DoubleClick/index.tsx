import React from "react";
import style from "./DoubleClick.module.css";
import { FaHandPointer } from "react-icons/fa";
import { motion } from "framer-motion";

const DoubleClick: React.FC = () => {
    const Tap = (scale: number) => (
        <motion.div
            className={style.clickIconMotion}
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                scale,
                transition: { duration: 1, repeat: Infinity },
            }}
        >
            <div className={style.dragTap} />
        </motion.div>
    );
    return (
        <section className={style.clickIconContainer}>
            {Tap(2)}
            {Tap(1.2)}
            <div className={style.clickIconHand}>
                <FaHandPointer />
            </div>
        </section>
    );
};

export default DoubleClick;
