import React from "react";
import style from "./PrimaryIconBtn.module.css";
import { PrimaryIconBtnProps } from "../../../../../models/types/props";
import useLoadingBtnAnimation from "../../../../../hooks/animation/useLoadingBtnAnimation";
import { DONE_BTN_ID } from "../../../../../models/constants";

const PrimaryIconBtn: React.FC<PrimaryIconBtnProps> = ({
    id,
    title,
    onClicked,
    disabled,
    loading,
    size = "large",
}) => {
    const { scope } = useLoadingBtnAnimation(loading, id || DONE_BTN_ID);

    const className =
        size === "large"
            ? style.btnPrimaryLarge
            : size === "medium"
              ? style.btnPrimaryMedium
              : style.btnPrimarySmall; //TODOCSS: refactor this

    
    return (
        <div ref={scope}>
            <button
                id={id}
                style={{ scale: 1 }}
                className={className}
                onClick={onClicked}
                disabled={disabled}
            >
                {title}
            </button>
        </div>
    );
};

export default PrimaryIconBtn;
