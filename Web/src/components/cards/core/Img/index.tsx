import React from "react";
import { ImgProps } from "../../../../models/types/props";
import style from "./Img.module.css";

const Img: React.FC<ImgProps> = ({ src, alt, isShadow, size = "large" }) => {
    const sizeClass = size === "large" ? style.cardImgLarge : style.cardImgSmall;
    return (
        <img
            className={`${sizeClass} ${isShadow ? style.cardImgShadow : ""}`}
            src={src}
            alt={alt}
        />
    );
};

export default Img;
