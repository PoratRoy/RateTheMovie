import React from "react";
import { FaPause } from "react-icons/fa6";
import style from "./PauseBtn.module.css";

const PauseBtn: React.FC = () => {
    const handlePause = () => {
        console.log("Pause");
    };

    return (
        <div onClick={handlePause} className={style.pauseBtn}>
            <div className={style.pauseIcon}>
                <FaPause />
            </div>
        </div>
    );
};

export default PauseBtn;
