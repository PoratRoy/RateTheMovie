import React from "react";
import path from "../../../router/routePath.json";
import style from "./NotEnoughMovies.module.css";
import useClear from "../../../hooks/gameplay/useClear";
import { useNavigate } from "react-router-dom";

const NotEnoughMovies: React.FC = () => {
    const { handleClear } = useClear();
    const navigate = useNavigate();

    const handleBackLink = () => {
        handleClear();
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
