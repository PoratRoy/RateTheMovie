import React from "react";
import { BELOW_ID } from "../../../../models/constants";
import { ElectedCardWrapperProps } from "../../../../models/types/props";
import style from "./ElectedCardWrapper.module.css";
import Rate from "../../core/Rate";
import Droppable from "../../../dnd/Droppable";

const ElectedCardWrapper: React.FC<ElectedCardWrapperProps> = ({
    children,
    rate,
    index,
    setFocus,
}) => {
    return (
        <div className={style.electedWrapper}>
            <Droppable droppableId={index} setFocus={setFocus}>
                {children}
            </Droppable>
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
