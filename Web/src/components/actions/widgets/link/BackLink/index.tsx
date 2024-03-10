import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import style from "./BackLink.module.css";
import { useNavigate } from "react-router-dom";
import { BackLinkProps } from "../../../../../models/types/props/common";
import { useGamePlayContext } from "../../../../../context/GamePlayContext";

const BackLink: React.FC<BackLinkProps> = ({ link, callback, toClear = true }) => {
    const { clearGameContext } = useGamePlayContext();
    const navigate = useNavigate();

    const handleBackLink = () => {
        if(toClear) clearGameContext();
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
