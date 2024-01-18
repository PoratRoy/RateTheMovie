import React from "react";
import { DescriptionProps } from "../../../models/types/props";
import style from "./Description.module.css";

const Description: React.FC<DescriptionProps> = ({ id, description }) => {
    return (
        <p id={id} className={style.landingDescription}>
            {description}
        </p>
    );
};

export default Description;
