import React from "react";
import Logo from "../../../components/common/widgets/Logo";
import style from "./PreviewLayout.module.css";
import { PreviewLayoutProps } from "../../../models/types/props/layout";
import Footer from "../../../components/common/Footer";
import { useGameStatusContext } from "../../../context/GameStatusContext";

const PreviewLayout: React.FC<PreviewLayoutProps> = ({ children, hasFooter = false }) => {
    const { setIsPreview } = useGameStatusContext();


    const handleGoBack = () => {
        setIsPreview(prev => !prev);
    };

    return (
        <section className={style.previewLayout}>
            <div className={style.previewLayoutLogo}>
                <Logo size="small" />
            </div>
            <section className={style.previewLayoutContianer}>{children}</section>

            {hasFooter ? <Footer callback={handleGoBack} toClear={false} /> : null}
        </section>
    );
};

export default PreviewLayout;
