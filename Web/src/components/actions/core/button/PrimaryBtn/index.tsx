import React from "react";
import style from "./PrimaryBtn.module.css";
import { PrimaryBtnProps } from "../../../../../models/types/props";
import useLoadingBtnAnimation from "../../../../../hooks/animation/useLoadingBtnAnimation";
import { DONE_BTN_ID } from "../../../../../models/constants";

const PrimaryBtn: React.FC<PrimaryBtnProps> = ({
    id,
    title,
    onClicked,
    disabled,
    loading,
    size = "large",
    type = "button",
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
            <input
                id={id}
                value={title}
                style={{ scale: 1 }}
                className={className}
                onClick={onClicked}
                disabled={disabled}
                type={type}
            />
        </div>
    );
};

export default PrimaryBtn;
