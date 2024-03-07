import React from "react";
import style from "./ElectedCardWrapper.module.css";
import Rate from "../../core/Rate";
import Droppable from "../../../dnd/Droppable";
import ElectedShadow from "../../shadow/ElectedShadow";
import { BELOW_ID, SHADOW_ID } from "../../../../models/constant";
import { ElectedCardWrapperProps } from "../../../../models/types/props/card";

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
            <ElectedShadow
                isRightChoice={isRightChoice}
                id={SHADOW_ID}
            />
            <Rate rate={rate} id={BELOW_ID} />
        </section>
    );
};

export default ElectedCardWrapper;
