import React from "react";
import style from "./Loading.module.css";
import { motion } from "framer-motion";

const Loading: React.FC = () => {
    return (
        <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1.2, ease: "linear", repeat: Infinity }}
            className={style.loading}
        ></motion.div>
    );
};

export default Loading;
