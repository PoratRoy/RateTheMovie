import React from "react";
import Modal from "../../core/Modal";
import style from "./RoundEndModal.module.css";
import { RoundEndModalProps } from "../../../../models/types/props/view";

const RoundEndModal: React.FC<RoundEndModalProps> = ({ close }) => {
    return (
        <Modal close={close} title={`Round`}>
            <section className={style.puaseModalBtns}></section>
        </Modal>
    );
};

export default RoundEndModal;
