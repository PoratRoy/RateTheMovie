import React from "react";
import style from "./LoadingCard.module.css";
import cardStyle from "../../../../style/CardStyle.module.css";

const LoadingCard: React.FC = () => {
    return <div className={`${style.cardLoading} ${cardStyle.sizeLarge}`} />;
};

export default LoadingCard;
