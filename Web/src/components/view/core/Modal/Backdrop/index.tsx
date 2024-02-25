import React from "react";
import { BackdropProps } from "../../../../../models/types/props";
import style from "../Modal.module.css";

const Backdrop: React.FC<BackdropProps> = ({ close, showBackdrop }) => {
    return (
        <div
            onClick={close}
            className={`${style.modalBackdrop} ${showBackdrop && style.modalShowBackdrop}`}
        />
    );
};

export default Backdrop;
