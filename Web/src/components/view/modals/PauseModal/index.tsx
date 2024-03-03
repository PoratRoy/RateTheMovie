import React from "react";
import Modal from "../../core/Modal";
import ShuffleBtn from "../../../actions/widgets/btn/ShuffleBtn";
import RestartBtn from "../../../actions/widgets/btn/RestartBtn";
import QuitBtn from "../../../actions/widgets/btn/QuitBtn";
import style from "./PauseModal.module.css";
import { PauseModalProps } from "../../../../models/types/props/view";

const PauseModal: React.FC<PauseModalProps> = ({ close }) => {
    return (
        <Modal close={close} title="PAUSE" hasCloseBtn>
            <section className={style.puaseModalBtns}>
                <ShuffleBtn close={close} />
                <RestartBtn close={close} />
                <QuitBtn close={close} />
            </section>
        </Modal>
    );
};

export default PauseModal;
