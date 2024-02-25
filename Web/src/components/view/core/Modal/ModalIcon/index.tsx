import React from "react";
import style from "../Modal.module.css";
import { FaStar } from "react-icons/fa";

const ModalIcon: React.FC = () => {
    return (
        <div className={style.modalIcon}>
            <FaStar />
        </div>
    );
};

export default ModalIcon;
