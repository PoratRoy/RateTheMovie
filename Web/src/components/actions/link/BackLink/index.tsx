import React from "react";
import { BackLinkProps } from "../../../../models/types/props";
import { FaArrowLeft } from "react-icons/fa";
import style from "./BackLink.module.css";
import useClear from "../../../../hooks/useClear";
import { useNavigate } from "react-router-dom";

const BackLink: React.FC<BackLinkProps> = ({ link, callback }) => {
    const { handleClear } = useClear();
    const navigate = useNavigate();

    const handleBackLink = () => {
        handleClear();
        if (callback) callback();
        else if (link) navigate(link);
    };

    return (
        <span className={style.fotterBackLink} onClick={handleBackLink}>
            <FaArrowLeft /> Back
        </span>
    );
};

export default BackLink;
