import React from "react";
import style from "./Pack.module.css";
import { PackProps } from "../../../../models/types/props";

const Pack: React.FC<PackProps> = ({ children, maxWidth = "50vw" }) => {
    return (
        <section style={{ maxWidth }} className={style.packContainer}>
            {children}
        </section>
    );
};

export default Pack;
