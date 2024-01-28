import React from "react";
import { BackLinkProps } from "../../../../models/types/props";
import { FaArrowLeft } from "react-icons/fa";
import style from "./BackLink.module.css";
import useClear from "../../../../hooks/useClear";

const BackLink: React.FC<BackLinkProps> = ({ link }) => {
    const { handleClear } = useClear();

    const handleBackLink = () => {
        handleClear(link);
    };

    return (
        <span className={style.fotterBackLink} onClick={handleBackLink}>
            <FaArrowLeft /> Back
        </span>
    );
};

export default BackLink;
