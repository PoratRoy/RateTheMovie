import React from "react";
import { ViewImgProps } from "../../../../models/types/props";
import style from "./ViewImg.module.css";

const ViewImg: React.FC<ViewImgProps> = ({ src, alt }) => {
    return <img className={style.cardViewImg} src={src} alt={alt} />;
};

export default ViewImg;
