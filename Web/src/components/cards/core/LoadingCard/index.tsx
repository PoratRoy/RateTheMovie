import React from "react";
import style from "./LoadingCard.module.css";
import cardStyle from "../../../../style/CardStyle.module.css";
import Decoration from "../../../../assets/cardDecoration.svg";

const LoadingCard: React.FC = () => {
    return <div className={`${style.cardLoading} ${cardStyle.sizeLarge}`}>
        <img className={style.decoration} src={Decoration} alt="Card decoration" />
    </div>;
};

export default LoadingCard;
