import React from "react";
import style from "./ResultCardWrapper.module.css";
import Rate from "../../../common/Rate";
import ElectedShadow from "../../shadow/ElectedShadow";
import { ResultCardWrapperProps } from "../../../../models/types/props/card";

const ResultCardWrapper: React.FC<ResultCardWrapperProps> = ({ children, rate, isRightChoice }) => {
    return (
        <section className={style.resultWrapper}>
            {children}
            <ElectedShadow isRightChoice={isRightChoice} />
            {rate ? <Rate rate={rate} /> : null}
        </section>
    );
};

export default ResultCardWrapper;
