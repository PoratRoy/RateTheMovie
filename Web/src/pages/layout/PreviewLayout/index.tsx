import React from "react";
import Logo from "../../../components/common/widgets/Logo";
import style from "./PreviewLayout.module.css";
import { PreviewLayoutProps } from "../../../models/types/props/layout";
import Footer from "../../../components/common/Footer";

const PreviewLayout: React.FC<PreviewLayoutProps> = ({ children, hasFooter = false }) => {
    return (
        <section className={style.previewLayout}>
            <div className={style.previewLayoutLogo}>
                <Logo size="small" />
            </div>
            <section>{children}</section>
            {/* TODO: link back to the game with the popup */}
            {hasFooter ? <Footer link="" /> : null}
        </section>
    );
};

export default PreviewLayout;
