import React from "react";
import style from "./ResultCardWrapper.module.css";
import Rate from "../../core/Rate";
import ElectedShadow from "../../shadow/ElectedShadow";
import { ResultCardWrapperProps } from "../../../../models/types/props/card";

const ResultCardWrapper: React.FC<ResultCardWrapperProps> = ({ children, rate, isRightChoice }) => {
    return (
        <section className={style.resultWrapper}>
            {children}
            <ElectedShadow isRightChoice={isRightChoice} />
            <Rate rate={rate} />
        </section>
    );
};

export default ResultCardWrapper;
