import React from "react";
import style from "./LoadingPage.module.css";
import Logo from "../../components/common/Logo";
import StartGameBtn from "../../components/actions/btn/StartGameBtn";
import { LoadingPageProps } from "../../models/types/props";

const LoadingPage: React.FC<LoadingPageProps> = ({ isCanStart }) => {
    return (
        <section className={style.loadingPage}>
            <div className={style.loadingPageLogo}>
                <Logo size="small" />
            </div>
            <StartGameBtn loading={!isCanStart} />
            <p className={style.gameDescription}>
                Order the movies by the rating order you think is correct
            </p>
        </section>
    );
};

export default LoadingPage;
