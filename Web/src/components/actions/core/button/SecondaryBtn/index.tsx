import React from "react";
import { SecondaryBtnProps } from "../../../../../models/types/props";
import style from "./SecondaryBtn.module.css";

const SecondaryBtn: React.FC<SecondaryBtnProps> = ({ id, title, onClicked, onFocused }) => {
    return (
        <div
            id={id}
            onClick={onClicked}
            className={`${style.btnSecondary} ${onFocused && style.btnSecondaryGlow}`}
        >
            {title}
        </div>
    );
};

export default SecondaryBtn;
