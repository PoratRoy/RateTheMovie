import React from "react";
import style from "./GameAlreadyStart.module.css";
import { useNavigate } from "react-router-dom";
import path from "../../../router/routePath.json";

const GameAlreadyStart: React.FC = () => {
    const navigate = useNavigate();

    const handleBackLink = () => {
        navigate(path.land);
    };
    //TODO: core component for all the error components
    return (
        <section className={style.gameStartContainer}>
            <div className={style.gameStartText}>Ops.. The game has already started</div>
            <div onClick={handleBackLink} className={style.gameStartLink}>
                Start a new game
            </div>
        </section>
    );
};

export default GameAlreadyStart;
