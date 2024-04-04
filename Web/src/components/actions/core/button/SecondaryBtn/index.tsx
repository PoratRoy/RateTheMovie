import React from "react";
import style from "./SecondaryBtn.module.css";
import { SecondaryBtnProps } from "../../../../../models/types/props/btn";
import { styleBtnSize } from "../../../../../style/style";

const SecondaryBtn: React.FC<SecondaryBtnProps> = ({ id, title, onClicked, size = "large" }) => {
    const className = styleBtnSize(style)[size];

    return (
        <div id={id} onClick={onClicked} className={className}>
            {title}
        </div>
    );
};

export default SecondaryBtn;
