import React from "react";
import Dragging from "../../../actions/animation/Dragging";
import style from "./CardImgShadow.module.css";
import DoubleClick from "../../../actions/animation/DoubleClick";
import useCardShadowAnimation from "../../../../hooks/animation/useCardShadowAnimation";
import { CardImgShadowProps } from "../../../../models/types/props/card";
import { DisplayNone } from "../../../../style/style";
import { DOUBLE_CLICK_ID, DRAGGING_ID, SHADOW_CARD_TITLE_ID } from "../../../../models/constant/ids";

const CardImgShadow: React.FC<CardImgShadowProps> = ({ title, actions }) => {
    const { scope } = useCardShadowAnimation(actions);

    return (
        <div ref={scope} className={style.cardTitle}>
            <section
                style={DisplayNone}
                id={DRAGGING_ID}
                className={style.cardAnimation}
            >
                <Dragging />
                <div>Drag to the right place</div>
            </section>
            <section
                id={DOUBLE_CLICK_ID}
                style={DisplayNone}
                className={style.cardAnimation}
            >
                <DoubleClick />
                <div>Double-click for more details</div>
            </section>
            <div
                id={SHADOW_CARD_TITLE_ID}
                style={DisplayNone}
                className={style.cardShadowTitle}
            >
                {title}
            </div>
        </div>
    );
};

export default CardImgShadow;
