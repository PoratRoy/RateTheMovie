import React from "react";
import style from "./Pack.module.css";
import { PackProps } from "../../../../models/types/props/pack";
import { styleDisplay } from "../../../../style/style";

//TODO: need to see if I can warp more then 4 cards
const Pack: React.FC<PackProps> = ({ children, packDisplay = "large" }) => {
    const className = styleDisplay(style)[packDisplay];

    return <section className={className}>{children}</section>;
};

export default Pack;
