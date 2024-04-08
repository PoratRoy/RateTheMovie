import React from "react";
import style from "./WaitingModal.module.css";

const WaitingModal: React.FC = () => {
    return (
        <section className={style.waitingModal}>
            <div>Waiting for the other players to finish ranking</div>
        </section>
    );
};

export default WaitingModal;
