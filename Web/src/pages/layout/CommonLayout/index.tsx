import React from "react";
import Logo from "../../../components/common/widgets/Logo";
import style from "./CommonLayout.module.css";
import { CommonLayoutProps } from "../../../models/types/props/layout";
import Footer from "../../../components/common/Footer";

const CommonLayout: React.FC<CommonLayoutProps> = ({ children, onGoBack, hasFooter = false }) => {
    return (
        <section className={style.previewLayout}>
            <div className={style.previewLayoutLogo}>
                <Logo size="small" />
            </div>
            <section className={style.previewLayoutContianer}>{children}</section>

            {hasFooter ? <Footer callback={onGoBack} toClear={false} /> : null}
        </section>
    );
};

export default CommonLayout;
