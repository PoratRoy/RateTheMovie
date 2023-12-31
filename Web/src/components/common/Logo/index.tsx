import React from "react";
import logo from "../../../assets/rate_the_movie_logo.svg";
import { LogoProps } from "../../../models/types/props";

const Logo: React.FC<LogoProps> = ({ width = 300 }) => {
    return <img style={{ width }} src={logo} alt="Rate the Movie Logo" />;
};

export default Logo;
