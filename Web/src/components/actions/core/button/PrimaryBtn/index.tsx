import React from "react";
import style from "./PrimaryBtn.module.css";
import { PrimaryBtnProps } from "../../../../../models/types/props";

const PrimaryBtn: React.FC<PrimaryBtnProps> = ({
    title,
    onClicked,
    disabled,
    loading,
    size = "large",
    type = "button",
}) => {
    const className =
        size === "large"
            ? style.btnPrimaryLarge
            : size === "medium"
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
