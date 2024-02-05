import React from "react";
import DraggingAnimation from "../../../actions/DraggingAnimation";
import style from "./CardImgShadow.module.css";
import { CardImgShadowProps } from "../../../../models/types/props";

const CardImgShadow: React.FC<CardImgShadowProps> = ({ title }) => {
    return (
        <div className={style.cardTitle}>
            <DraggingAnimation />
            {title}
        </div>
    );
};

export default CardImgShadow;
