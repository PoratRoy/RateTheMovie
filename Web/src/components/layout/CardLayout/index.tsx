import React from "react";
import style from "./CardLayout.module.css";
import cardStyle from "../../../style/CardStyle.module.css";
import { CardLayoutProps } from "../../../models/types/props/layout";
import { styleSize } from "../../../style/style";

const CardLayout: React.FC<CardLayoutProps> = ({ id, onClick, children, size = "large" }) => {
    const sizeClass = styleSize(cardStyle)[size];

    return (
        <section
            id={id}
            className={`${sizeClass} ${style.cardContainer}`}
            style={{ WebkitTapHighlightColor: "transparent" }}
            onClick={onClick}
        >
            {children}
        </section>
    );
};

export default CardLayout;
