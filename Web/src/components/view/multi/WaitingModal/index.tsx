import React from "react";
import style from "./WaitingModal.module.css";
import Loading from "../../../actions/animation/Loading";

const WaitingModal: React.FC = () => {
    return (
        <section className={style.waitingModal}>
            <div>Waiting for the other players to finish ranking</div>
            <Loading />
        </section>
    );
};

export default WaitingModal;
