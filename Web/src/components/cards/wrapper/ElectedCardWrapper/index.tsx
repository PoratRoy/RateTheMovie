import React from "react";
import { BELOW_ID } from "../../../../models/constants";
import { ElectedCardWrapperProps } from "../../../../models/types/props";
import style from "./ElectedCardWrapper.module.css";
import Rate from "../../core/Rate";
import Droppable from "../../../dnd/Droppable";
import ElectedShadow from "../../shadow/ElectedShadow";

const ElectedCardWrapper: React.FC<ElectedCardWrapperProps> = ({
    children,
    rate,
    index,
    setFocus,
    isRightChoice,
}) => {
    return (
        <section className={style.electedWrapper}>
            <Droppable droppableId={index} setFocus={setFocus}>
                {children}
            </Droppable>
            <ElectedShadow isRightChoice={isRightChoice} />
            <Rate rate={rate} id={BELOW_ID} />
        </section>
    );
};

export default ElectedCardWrapper;
