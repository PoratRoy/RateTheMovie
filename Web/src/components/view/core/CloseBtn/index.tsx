import React from "react";
import { CloseBtnProps } from "../../../../models/types/props";
import style from "./CloseBtn.module.css";

const CloseBtn: React.FC<CloseBtnProps> = ({ close }) => {
    return (
        <div onClick={close} className={style.cardViewExist}>
            X
        </div>
    );
};

export default CloseBtn;
