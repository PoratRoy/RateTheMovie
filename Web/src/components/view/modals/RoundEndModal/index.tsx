import React from "react";
import Modal from "../../core/Modal";
import style from "./RoundEndModal.module.css";
import { RoundEndModalProps } from "../../../../models/types/props/view";
import CardsReveal from "../../../actions/components/CardsReveal";
import { useGamePlayContext } from "../../../../context/GamePlayContext";
import RoundModalBtns from "../../RoundModalBtns";
import PlayerScore from "../../core/PlayerScore";
import useRoundEndModal from "../../../../hooks/gameplay/useRoundEndModal";

const RoundEndModal: React.FC<RoundEndModalProps> = ({ close }) => {
    const { currentPlayer } = useGamePlayContext();
    const { title, gameOver } = useRoundEndModal();

    return (
        <Modal close={close} title={title}>
            <section className={style.roundEndModal}>
                <PlayerScore score={currentPlayer?.score || 0} />
                <CardsReveal />
                <RoundModalBtns close={close} gameOver={gameOver} isSingle />
            </section>
        </Modal>
    );
};

export default RoundEndModal;
