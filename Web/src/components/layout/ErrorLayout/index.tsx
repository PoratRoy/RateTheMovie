import React from "react";
import style from "./ErrorLayout.module.css";
import { ErrorLayoutProps } from "../../../models/types/props/layout";

const ErrorLayout: React.FC<ErrorLayoutProps> = ({ description, buttonText, onClick }) => {
    return (
        <section className={style.errorContainer}>
            <h2>{description}</h2>
            <div onClick={onClick} className={style.errorLink}>
                {buttonText}
            </div>
        </section>
    );
};

export default ErrorLayout;
