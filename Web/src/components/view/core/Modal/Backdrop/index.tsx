import React from "react";
import style from "../Modal.module.css";
import { BackdropProps } from "../../../../../models/types/props/view";

const Backdrop: React.FC<BackdropProps> = ({ close, showBackdrop }) => {
    return (
        <div
            onClick={close}
            className={`${style.modalBackdrop} ${showBackdrop && style.modalShowBackdrop}`}
        />
    );
};

export default Backdrop;
