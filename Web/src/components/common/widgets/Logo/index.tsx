import React from "react";
import logo from "../../../../assets/rate_the_movie_logo.svg";
import style from "./Logo.module.css";
import { LogoProps } from "../../../../models/types/props/common";

const Logo: React.FC<LogoProps> = ({ id, size = "large" }) => {
    const classStyle = size === "large" ? style.logoLarge : style.logoSmall;//TODOCSS: refactor
    return <img id={id} className={classStyle} src={logo} alt="Rate the Movie Logo" />;
};

export default Logo;
