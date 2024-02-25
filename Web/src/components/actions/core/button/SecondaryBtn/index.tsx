import React from "react";
import style from "./SecondaryBtn.module.css";
import { SecondaryBtnProps } from "../../../../../models/types/props/btn";

const SecondaryBtn: React.FC<SecondaryBtnProps> = ({ id, title, onClicked, size = "large" }) => {
    const className =
        size === "large"
            ? style.btnSecondaryLarge
            : size === "medium"
              ? style.btnSecondaryMedium
              : style.btnSecondarySmall; //TODO: refactor this

    return (
        <div id={id} onClick={onClicked} className={className}>
            {title}
        </div>
    );
};

export default SecondaryBtn;
