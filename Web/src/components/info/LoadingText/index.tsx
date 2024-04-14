import React from "react";
import style from "./LoadingText.module.css";
import ImdbIcon from "../../common/widgets/ImdbIcon";

const LoadingText: React.FC = () => {
    return (
        <div className={style.loadingText}>
            <h1>
                Rank the movies according to <ImdbIcon /> ratings 
                <div>and earn points!</div>
            </h1>
        </div>
    );
};

export default LoadingText;
