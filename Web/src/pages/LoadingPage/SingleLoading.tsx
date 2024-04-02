import React from "react";
import { SingleLoadingProps } from "../../models/types/props/landing";
import TextRotator from "../../components/info/TextRotator";
import CommonLayout from "../layout/CommonLayout";
import style from "./LoadingPage.module.css";
import Loading from "../../components/actions/animation/Loading";
//https://unused-css.com/blog/animated-down-arrow/

const SingleLoading: React.FC<SingleLoadingProps> = () => {
    return (
        <CommonLayout>
            <TextRotator />

            <section className={style.loadingPageBtnStatus}>
                <Loading />
            </section>
        </CommonLayout>
    );
};

export default SingleLoading;
