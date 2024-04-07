import React from "react";
import style from "./Img.module.css";
import cardStyle from "../../../../style/CardStyle.module.css";
import NoImg from "../../../../assets/NoImg.svg";
import { ImgProps } from "../../../../models/types/props/common";
import { styleSize } from "../../../../style/style";
import { SECONDARY_BORDER_RADIUS } from "../../../../style/root";

const Img: React.FC<ImgProps> = ({ src, alt, isShadow, size = "large" }) => {
    const sizeClass = styleSize(cardStyle)[size];
    return (
        <img
            className={`${sizeClass} ${isShadow ? style.cardImgShadow : ""}`}
            style={{objectFit: "cover", borderRadius: SECONDARY_BORDER_RADIUS}}
            src={src !== "" ? src : NoImg}
            alt={alt}
        />
    );
};

export default Img;
