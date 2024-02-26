import React from "react";
import style from "./LoadingPage.module.css";
import Logo from "../../components/common/widgets/Logo";
import StartGameBtn from "../../components/actions/widgets/btn/StartGameBtn";
import { LoadingPageProps } from "../../models/types/props/landing";

const LoadingPage: React.FC<LoadingPageProps> = ({ canStart }) => {
    return (
        <section className={style.loadingPage}>
            <div className={style.loadingPageLogo}>
                <Logo size="small" />
            </div>
            <StartGameBtn loading={!canStart} />
            <p className={style.gameDescription}>
                Order the movies by the rating order you think is correct
            </p>
        </section>
    );
};

export default LoadingPage;
