import React from "react";
import Modal from "../../core/Modal";
import style from "./MultiRoundEndModal.module.css";
import { MultiRoundEndModalProps } from "../../../../models/types/props/view";
import { useSocketContext } from "../../../../context/SocketContext";
import useRoundEndModal from "../../../../hooks/gameplay/useRoundEndModal";
import TimerBar from "../../../actions/animation/TimerBar";
import RankingBoardTwo from "../../../ranking/RankingBoardTwo";
import AdditionalBtns from "../../core/AdditionalBtns";

const MultiRoundEndModal: React.FC<MultiRoundEndModalProps> = ({ close }) => {
    const { leaderBoardPlayers } = useSocketContext();
    const { title, gameOver } = useRoundEndModal();

    return (
        <Modal close={close} title={title}>
            <section className={style.MultiRoundEndModal}>
                <RankingBoardTwo players={leaderBoardPlayers} />
                <AdditionalBtns close={close} isSingle={false} isGameOver={gameOver} />
                <TimerBar activate />
            </section>
        </Modal>
    );
};

export default MultiRoundEndModal;
