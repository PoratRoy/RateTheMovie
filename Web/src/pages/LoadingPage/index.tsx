import React from "react";
import style from "./LoadingPage.module.css";
import Logo from "../../components/common/Logo";

const LoadingPage: React.FC = () => {
    return (
        <section className={style.loadingPage}>
            <div className={style.loadingPageLogo}>
                <Logo size="small" />
            </div>
            <div className={style.tmpLoading} />
            <p className={style.gameDescription}>
                Order the movies by the rating order you think is correct
            </p>
        </section>
    );
};

export default LoadingPage;
