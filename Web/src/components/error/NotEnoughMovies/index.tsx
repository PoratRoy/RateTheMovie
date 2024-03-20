import React from "react";
import style from "./NotEnoughMovies.module.css";
import useGameActions from "../../../hooks/gameplay/useGameActions";

const NotEnoughMovies: React.FC = () => {
    const { handleQuit } = useGameActions(() => {});

    const handleBackLink = () => {
        handleQuit();
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
