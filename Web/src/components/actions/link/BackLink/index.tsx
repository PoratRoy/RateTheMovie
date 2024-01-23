import React from "react";
import { useNavigate } from "react-router-dom";
import { BackLinkProps } from "../../../../models/types/props";
import { FaArrowLeft } from "react-icons/fa";
import style from "./BackLink.module.css";
import { useMovieContext } from "../../../../context/MovieContext";
import { useGamePlayContext } from "../../../../context/GamePlayContext";

const BackLink: React.FC<BackLinkProps> = ({ link }) => {
    const navigate = useNavigate();
    const { clearMovieContext } = useMovieContext();
    const { clearGameContext } = useGamePlayContext();

    const handleBackLink = () => {
        clearMovieContext();
        clearGameContext();
        navigate(link);
    };

    return (
        <span className={style.fotterBackLink} onClick={handleBackLink}>
            <FaArrowLeft /> Back
        </span>
    );
};

export default BackLink;
