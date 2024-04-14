import React from "react";
import style from "./PrimaryBtn.module.css";
import useLoadingBtnAnimation from "../../../../../hooks/animation/useLoadingBtnAnimation";
import { PrimaryBtnProps } from "../../../../../models/types/props/btn";
import { DONE_BTN_ID } from "../../../../../models/constant/ids";
import { styleBtnSize } from "../../../../../style/style";


const PrimaryBtn: React.FC<PrimaryBtnProps> = ({
    id,
    title,
    onClicked,
    disabled,
    loading,
    size = "large",
    type = "button",
}) => {
    const { scope } = useLoadingBtnAnimation(loading, id || DONE_BTN_ID, size);
    const className = styleBtnSize(style)[size];

    return (
        <div ref={scope} style={{backgroundColor: "black"}}>
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
