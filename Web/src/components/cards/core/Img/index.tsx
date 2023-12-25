import React from "react";
import { ImgProps } from "../../../../models/types/props";
import style from "./Img.module.css";

const Img: React.FC<ImgProps> = ({ src, alt, height = "100%" }) => {
    return <img height={height} className={style.cardImg} src={src} alt={alt} />;
};

export default Img;
