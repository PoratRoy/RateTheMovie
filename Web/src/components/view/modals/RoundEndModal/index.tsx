import React from "react";
import Modal from "../../core/Modal";
import style from "./RoundEndModal.module.css";
import { RoundEndModalProps } from "../../../../models/types/props/view";
import { useGamePlayContext } from "../../../../context/GamePlayContext";
import PlayerScore from "../../core/PlayerScore";
import PlayAgainBtn from "../../../actions/widgets/btn/PlayAgainBtn";
import NextRoundBtn from "../../../actions/widgets/btn/NextRoundBtn";
import AdditionalBtns from "../../core/AdditionalBtns";
import PackOfResult from "../../../cards/pack/PackOfResult";

const RoundEndModal: React.FC<RoundEndModalProps> = ({ close, title, gameOver }) => {
    const { currentPlayer, correctOrder } = useGamePlayContext();

    return (
        <Modal title={title} gameOver={gameOver}>
            <section className={style.roundEndModal}>
                <PlayerScore score={currentPlayer?.score || 0} />
                <section className={style.roundEndResultCards}>
                    <PackOfResult revealCards={correctOrder} currentPlayer={currentPlayer} />
                </section>

                {gameOver ? <PlayAgainBtn close={close} /> : <NextRoundBtn close={close} />}
                <AdditionalBtns close={close} btns={gameOver ? ["quit"] : []} />
            </section>
        </Modal>
    );
};

export default RoundEndModal;
