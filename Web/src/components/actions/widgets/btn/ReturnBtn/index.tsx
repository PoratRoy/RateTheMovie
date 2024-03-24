import React from "react";
import style from "./ReturnBtn.module.css";
import { FaArrowRight } from "react-icons/fa6";
import { ReturnBtnProps } from "../../../../../models/types/props/btn";
import QuitCircleBtn from "../QuitCircleBtn";

const ReturnBtn: React.FC<ReturnBtnProps> = ({ handleClose, type, close }) => {
    return (
        <div onClick={handleClose} className={style.modalClose}>
            {type === "quit" ? <QuitCircleBtn close={close} /> : <FaArrowRight />}
        </div>
    );
};

export default ReturnBtn;
