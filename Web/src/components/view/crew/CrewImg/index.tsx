import React from "react";
import style from "./CrewImg.module.css";
import { CrewImgProps } from "../../../../models/types/props";

const CrewImg: React.FC<CrewImgProps> = ({ src, alt }) => {
    return <img className={style.crewImg} src={src} alt={alt} />;
};

export default CrewImg;
