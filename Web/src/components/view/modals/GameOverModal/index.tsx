import React from "react";
import Modal from "../../core/Modal";
import style from "./GameOverModal.module.css";
import { GameOverModalProps } from "../../../../models/types/props/view";

const GameOverModal: React.FC<GameOverModalProps> = ({ close }) => {
    return (
        <Modal close={close} title="GAME OVER">
            <section className={style.puaseModalBtns}></section>
        </Modal>
    );
};

export default GameOverModal;
