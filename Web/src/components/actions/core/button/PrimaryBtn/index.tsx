import React from "react";
import style from "./PrimaryBtn.module.css";
import { PrimaryBtnProps } from "../../../../../models/types/props";

const PrimaryBtn: React.FC<PrimaryBtnProps> = ({
    id,
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
              : style.btnPrimarySmall;//TODO: refactor this
    return (
        <React.Fragment>
            {loading ? (
                <div className={style.loadingBtnPrimary}>loading...</div>
                // TODO: loading animation
            ) : (
                <input
                    id={id}
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
