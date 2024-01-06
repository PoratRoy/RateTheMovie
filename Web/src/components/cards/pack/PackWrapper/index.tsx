import React from "react";
import { PackWrapperProps } from "../../../../models/types/props";
import style from "./PackWrapper.module.css";

const PackWrapper: React.FC<PackWrapperProps> = ({ children }) => {
    return <section className={style.packWrapper}>{children}</section>;
};

export default PackWrapper;
