import React from "react";
import style from "./Title.module.css";
import { TitleProps } from "../../../../models/types/props/common";

const Title: React.FC<TitleProps> = ({ title }) => {
    return <div className={style.title}>{title.toLocaleUpperCase()}</div>;
};

export default Title;
