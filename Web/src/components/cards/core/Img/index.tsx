import React from "react";
import style from "./Img.module.css";
import NoImg from "../../../../assets/NoImg.svg";
import { ImgProps } from "../../../../models/types/props/common";
import { styleSize } from "../../../../style/style";

const Img: React.FC<ImgProps> = ({ src, alt, isShadow, size = "large" }) => {
    const sizeClass = styleSize(style)[size];
    return (
        <img
            className={`${sizeClass} ${isShadow ? style.cardImgShadow : ""}`}
            src={src !== "" ? src : NoImg}
            alt={alt}
        />
    );
};

export default Img;
