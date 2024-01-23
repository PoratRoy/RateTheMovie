import React from "react";
import { BELOW_ID } from "../../../../models/constants";
import { ElectedCardWrapperProps } from "../../../../models/types/props";
import style from "./ElectedCardWrapper.module.css";
import Rate from "../../core/Rate";

const ElectedCardWrapper: React.FC<ElectedCardWrapperProps> = ({ children, rate, scope }) => {
    return (
        <div ref={scope} className={style.electedWrapper}>
            {children}
            <div
                id={BELOW_ID}
                className={style.electedWrapperRate}
                style={{ display: "none", opacity: 0 }}
            >
                <Rate rate={rate} />
            </div>
        </div>
    );
};

export default ElectedCardWrapper;
