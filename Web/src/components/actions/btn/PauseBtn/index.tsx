import React from "react";
import { FaPause } from "react-icons/fa6";
import style from "./PauseBtn.module.css";
import { PauseBtnProps } from "../../../../models/types/props";

const PauseBtn: React.FC<PauseBtnProps> = ({ onClicked }) => {
    return (
        <div onClick={onClicked} className={style.pauseBtn}>
            <div className={style.pauseIcon}>
                <FaPause />
            </div>
        </div>
    );
};

export default PauseBtn;
