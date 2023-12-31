import React from "react";
import { SelectLayoutProps } from "../../../models/types/props";
import style from "./SelectLayout.module.css";

const SelectLayout: React.FC<SelectLayoutProps> = ({ children, label }) => {
    return (
        <section className={style.selectContainer}>
            <div className={style.selectLabel}>{label}</div>
            <div className={style.selectSelect}>{children}</div>
        </section>
    );
};

export default SelectLayout;
