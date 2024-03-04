import React from "react";
import Modal from "../../core/Modal";
import style from "./RoundEndModal.module.css";
import { RoundEndModalProps } from "../../../../models/types/props/view";
import NextRoundBtn from "../../../actions/widgets/btn/NextRoundBtn";
import QuitCircleBtn from "../../../actions/widgets/btn/QuitCircleBtn";
import MoviesBtn from "../../../actions/widgets/btn/MoviesBtn";
import RestartCircleBtn from "../../../actions/widgets/btn/RestartCircleBtn";
import CardsReveal from "../../../actions/CardsReveal";
import { useGamePlayContext } from "../../../../context/GamePlayContext";
import useGameActions from "../../../../hooks/gameplay/useGameActions";

const RoundEndModal: React.FC<RoundEndModalProps> = ({ close }) => {
    const { game } = useGamePlayContext();
    const { handleRestart } = useGameActions(close);

    const handleNextRound = () => {
        handleRestart("increase");
    };

    return (
        <Modal close={close} title={`ROUND ${game?.currentRound || 1}`}>
            <section className={style.roundEndModal}>
                <CardsReveal />
                <NextRoundBtn onClicked={handleNextRound} />
                <section className={style.roundEndModalBtns}>
                    <QuitCircleBtn close={close} />
                    <MoviesBtn onClicked={() => {}} />
                    <RestartCircleBtn close={close} />
                </section>
            </section>
        </Modal>
    );
};

export default RoundEndModal;
