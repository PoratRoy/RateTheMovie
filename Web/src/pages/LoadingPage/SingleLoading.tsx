import React from "react";
import StartGameBtn from "../../components/actions/widgets/btn/StartGameBtn";
import { SingleLoadingProps } from "../../models/types/props/landing";
import TextRotator from "../../components/info/TextRotator";
import CommonLayout from "../layout/CommonLayout";
import style from "./LoadingPage.module.css";
//https://unused-css.com/blog/animated-down-arrow/

const SingleLoading: React.FC<SingleLoadingProps> = ({ isLoading, onClicked }) => {
    return (
        <CommonLayout>
            <TextRotator />

            <section className={style.loadingPageBtnStatus}>
                <StartGameBtn loading={isLoading} onClicked={onClicked} />
            </section>
        </CommonLayout>
    );
};

export default SingleLoading;
