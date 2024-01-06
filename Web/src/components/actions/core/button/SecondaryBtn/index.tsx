import React from "react";
import { SecondaryBtnProps } from "../../../../../models/types/props";
import style from "./SecondaryBtn.module.css";

const SecondaryBtn: React.FC<SecondaryBtnProps> = ({
    title,
    onClicked,
    disabled,
    width,
    height,
    loading,
    onFocused,
}) => {
    return (
        <React.Fragment>
            {loading ? (
                <div className={style.loadingBtnSecondary}>loading...</div>
            ) : (
                <div
                    onClick={onClicked}
                    style={{ width, height }}
                    className={`${style.btnSecondary} ${onFocused && style.btnSecondaryGlow}`}
                >
                    {title}
                </div>
            )}
        </React.Fragment>
    );
};

export default SecondaryBtn;
