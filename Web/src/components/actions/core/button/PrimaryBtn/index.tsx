import React from "react";
import style from "./PrimaryBtn.module.css";
import { PrimaryBtnProps } from "../../../../../models/types/props";

const PrimaryBtn: React.FC<PrimaryBtnProps> = ({
    title,
    onClicked,
    disabled,
    loading,
    size = "Large",
    type = "button",
}) => {
    const className =
        size === "Large"
            ? style.btnPrimaryLarge
            : size === "Medium"
              ? style.btnPrimaryMedium
              : style.btnPrimarySmall;
    return (
        <React.Fragment>
            {loading ? (
                <div className={style.loadingBtnPrimary}>loading...</div>
            ) : (
                <input
                    value={title}
                    className={className}
                    onClick={onClicked}
                    disabled={disabled}
                    type={type}
                />
            )}
        </React.Fragment>
    );
};

export default PrimaryBtn;
