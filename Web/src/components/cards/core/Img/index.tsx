import React from "react";
import style from "./Img.module.css";
import NoImg from "../../../../assets/NoImg.svg";
import { ImgProps } from "../../../../models/types/props/common";

const Img: React.FC<ImgProps> = ({ src, alt, isShadow, size = "large" }) => {
    const sizeClass = size === "large" ? style.cardImgLarge : style.cardImgSmall; //TODOCSS: refactor this
    return (
        <img
            className={`${sizeClass} ${isShadow ? style.cardImgShadow : ""}`}
            src={src !== "" ? src : NoImg}
            alt={alt}
        />
    );
};

export default Img;
