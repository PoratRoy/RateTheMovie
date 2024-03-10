import React from "react";
import style from "./CloseBtn.module.css";
import { IoMdClose } from "react-icons/io";
import { CloseBtnProps } from "../../../../models/types/props/btn";

const CloseBtn: React.FC<CloseBtnProps> = ({ close }) => {
    return (
        <div onClick={close} className={style.cardViewExist}>
            <IoMdClose />
        </div>
    );
};

export default CloseBtn;
