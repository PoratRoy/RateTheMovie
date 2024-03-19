import React from "react";
import style from "./Description.module.css";
import { DescriptionProps } from "../../../models/types/props/common";

const Description: React.FC<DescriptionProps> = ({ id, description }) => {
    return (
        <p id={id} className={style.landingDescription}>
            {description}
        </p>
    );
};

export default Description;
