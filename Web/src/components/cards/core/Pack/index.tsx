import React from "react";
import style from "./Pack.module.css";
import { PackProps } from "../../../../models/types/props/pack";

//TODO: need to see if I can warp more then 4 cards
const Pack: React.FC<PackProps> = ({ children, packDisplay = "large" }) => {
    const classStyle =
        packDisplay === "wrap"
            ? style.packContainerWrap
            : packDisplay === "small"
              ? style.packContainerSmall
              : style.packContainer; //TODOCSS: refactor this

    return <section className={classStyle}>{children}</section>;
};

export default Pack;
