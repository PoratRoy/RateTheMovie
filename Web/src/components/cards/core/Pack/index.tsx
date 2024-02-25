import React from "react";
import style from "./Pack.module.css";
import { PackProps } from "../../../../models/types/props";

//TODO: need to see if I can warp more then 4 cards
const Pack: React.FC<PackProps> = ({ children, isWrap = false }) => {
    const classStyle = isWrap ? style.packContainerWrap : style.packContainer;//TODOCSS: refactor this
    return <section className={classStyle}>{children}</section>;
};

export default Pack;
