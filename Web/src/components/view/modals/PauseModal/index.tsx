import React from "react";
import Modal from "../../core/Modal";
import { PauseModalProps } from "../../../../models/types/props";
import ShuffleBtn from "../../../actions/btn/ShuffleBtn";
import RestartBtn from "../../../actions/btn/RestartBtn";
import QuitBtn from "../../../actions/btn/QuitBtn";
import style from "./PauseModal.module.css";

const PauseModal: React.FC<PauseModalProps> = ({ close }) => {
    return (
        <Modal close={close} title="PAUSE">
            <section className={style.puaseModalBtns}>
                <ShuffleBtn close={close} />
                <RestartBtn close={close} />
                <QuitBtn close={close} />
            </section>
        </Modal>
    );
};

export default PauseModal;
