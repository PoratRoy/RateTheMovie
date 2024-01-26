import React from "react";
import style from "./Pack.module.css";
import { PackProps } from "../../../../models/types/props";

const Pack: React.FC<PackProps> = ({ children, isWrap = false }) => {
    const classStyle = isWrap ? style.packContainerWrap : style.packContainer;//TODO: refactor this
    return <section className={classStyle}>{children}</section>;
};

export default Pack;
