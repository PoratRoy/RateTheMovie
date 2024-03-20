import React from "react";
import Modal from "../../core/Modal";
import style from "./RoundEndModal.module.css";
import { RoundEndModalProps } from "../../../../models/types/props/view";
import CardsReveal from "../../../actions/components/CardsReveal";
import { useGamePlayContext } from "../../../../context/GamePlayContext";
import PlayerScore from "../../core/PlayerScore";
import PlayAgainBtn from "../../../actions/widgets/btn/PlayAgainBtn";
import NextRoundBtn from "../../../actions/widgets/btn/NextRoundBtn";
import AdditionalBtns from "../../core/AdditionalBtns";

const RoundEndModal: React.FC<RoundEndModalProps> = ({ close, title, gameOver }) => {
    const { currentPlayer } = useGamePlayContext();

    return (
        <Modal close={close} title={title}>
            <section className={style.roundEndModal}>
                <PlayerScore score={currentPlayer?.score || 0} />
                <CardsReveal />
                {gameOver ? <PlayAgainBtn close={close} /> : <NextRoundBtn close={close} />}
                <AdditionalBtns
                    close={close}
                    btns={
                        gameOver
                            ? ["movieList", "leaderboard", "quit"]
                            : ["movieList", "quit", "restart"]
                    }
                />
            </section>
        </Modal>
    );
};

export default RoundEndModal;
