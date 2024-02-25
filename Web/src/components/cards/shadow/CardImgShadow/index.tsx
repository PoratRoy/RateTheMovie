import React from "react";
import Dragging from "../../../actions/animation/Dragging";
import style from "./CardImgShadow.module.css";
import DoubleClick from "../../../actions/animation/DoubleClick";
import useCardShadowAnimation from "../../../../hooks/animation/useCardShadowAnimation";
import { DOUBLE_CLICK_ID, DRAGGING_ID, SHADOW_CARD_TITLE_ID } from "../../../../models/constant";
import { CardImgShadowProps } from "../../../../models/types/props/card";

const CardImgShadow: React.FC<CardImgShadowProps> = ({ title }) => {
    const { scope } = useCardShadowAnimation();

    return (
        <div ref={scope} className={style.cardTitle}>
            <section
                style={{ display: "none", opacity: 0 }}
                id={DRAGGING_ID}
                className={style.cardAnimation}
            >
                <Dragging />
                <div>Drag to the right place</div>
            </section>
            <section
                id={DOUBLE_CLICK_ID}
                style={{ display: "none", opacity: 0 }}
                className={style.cardAnimation}
            >
                <DoubleClick />
                <div>Double-click for more details</div>
            </section>
            <div
                id={SHADOW_CARD_TITLE_ID}
                style={{ display: "none", opacity: 0 }}
                className={style.cardShadowTitle}
            >
                {title}
            </div>
        </div>
    );
};

export default CardImgShadow;
