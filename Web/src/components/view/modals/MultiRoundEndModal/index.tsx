import React from "react";
import Modal from "../../core/Modal";
import style from "./MultiRoundEndModal.module.css";
import { MultiRoundEndModalProps } from "../../../../models/types/props/view";
import { useSocketContext } from "../../../../context/SocketContext";
import useRoundEndModal from "../../../../hooks/gameplay/useRoundEndModal";
import RankingBoardTwo from "../../../ranking/RankingBoardTwo";
import RankingBoard from "../../../ranking/RankingBoard";
import AdditionalBtns from "../../core/AdditionalBtns";
import TimerModal from "../../../actions/timer/TimerModal";
import ExitGameBtn from "../../../actions/widgets/btn/ExitGameBtn";

const MultiRoundEndModal: React.FC<MultiRoundEndModalProps> = ({ close }) => {
    const { leaderBoardPlayers } = useSocketContext();
    const { title, gameOver } = useRoundEndModal();

    return (
        <Modal close={close} title={title}>
            {gameOver ? (
                <section className={style.MultiRoundEndModal}>
                    <RankingBoard players={leaderBoardPlayers} />
                    <ExitGameBtn close={close} />
                </section>
            ) : (
                <section className={style.MultiRoundEndModal}>
                    <RankingBoardTwo players={leaderBoardPlayers} />
                    <AdditionalBtns close={close} isSingle={false} isGameOver={gameOver} />
                    <TimerModal activate close={close}/>
                </section>
            )}
        </Modal>
    );
};

export default MultiRoundEndModal;
