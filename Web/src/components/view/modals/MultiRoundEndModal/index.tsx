import React from "react";
import Modal from "../../core/Modal";
import style from "./MultiRoundEndModal.module.css";
import { MultiRoundEndModalProps } from "../../../../models/types/props/view";
import CardsReveal from "../../../actions/CardsReveal";
import { useGamePlayContext } from "../../../../context/GamePlayContext";
import { useSocketContext } from "../../../../context/SocketContext";
import { NEXT_ROUND_BTN_ID, SCORE_ID } from "../../../../models/constant";
import useMultiGameOverAnimation from "../../../../hooks/animation/useMultiGameOverAnimation";
import RoundModalBtns from "../../RoundModalBtns";
import PlayerScore from "../../core/PlayerScore";
import useRoundEndModal from "../../../../hooks/gameplay/useRoundEndModal";
import TimerBar from "../../../actions/TimerBar";
import RankingBoardTwo from "../../../ranking/RankingBoardTwo";

const MultiRoundEndModal: React.FC<MultiRoundEndModalProps> = ({ close }) => {
    const { leaderBoardPlayers } = useSocketContext();
    const { scope } = useMultiGameOverAnimation(leaderBoardPlayers.length !== 0 ? true : false);
    const { currentPlayer } = useGamePlayContext();
    const { title, gameOver } = useRoundEndModal();

    return (
        <Modal close={close} title={title}>
            <section ref={scope} className={style.MultiRoundEndModal}>
                <PlayerScore id={SCORE_ID} score={currentPlayer?.score || 0} />
                <CardsReveal />
                <RankingBoardTwo players={leaderBoardPlayers} />
                <RoundModalBtns
                    id={NEXT_ROUND_BTN_ID}
                    close={close}
                    gameOver={gameOver}
                    role={currentPlayer?.role || "player"}
                />
                <TimerBar activate />
            </section>
        </Modal>
    );
};

export default MultiRoundEndModal;
