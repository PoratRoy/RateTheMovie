import React from "react";
import style from "./SomethingWentWrong.module.css";
import useGameActions from "../../../hooks/gameplay/useGameActions";

const SomethingWentWrong: React.FC = () => {
    const { handleQuit } = useGameActions(() => {});

    const handleBackLink = () => {
        handleQuit();
    };

    return (
        <section className={style.wrongContainer}>
            <div className={style.wrongText}>There is an issue starting the game</div>
            <div onClick={handleBackLink} className={style.wrongLink}>
                Exit the game
            </div>
        </section>
    );
};

export default SomethingWentWrong;
