import React from "react";
import path from "../../../router/routePath.json";
import style from "./NotEnoughMovies.module.css";
import { useNavigate } from "react-router-dom";
import { useGamePlayContext } from "../../../context/GamePlayContext";

const NotEnoughMovies: React.FC = () => {
    const { clearGameContext } = useGamePlayContext();
    const navigate = useNavigate();

    const handleBackLink = () => {
        clearGameContext();
        navigate(path.land);
    };
    return (
        <section className={style.notEnoughContainer}>
            <div className={style.notEnoughText}>There are not enough movies with this filter</div>
            <div onClick={handleBackLink} className={style.notEnoughLink}>
                Change your filters
            </div>
        </section>
    );
};

export default NotEnoughMovies;
