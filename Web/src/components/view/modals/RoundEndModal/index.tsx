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
import useHandleShuffle from "../../../../hooks/gameplay/useHandleShuffle";

const RoundEndModal: React.FC<RoundEndModalProps> = ({ close }) => {
    const { setNextRound, setNextRoundNumber, game } = useGamePlayContext();
    const { handleShuffle } = useHandleShuffle();

    const handleNextRound = () => {
        setNextRoundNumber();
        setNextRound(false);
        handleShuffle();
        close();
    };

    return (
        <Modal close={close} title={`ROUND ${game?.currentRound || 1}`}>
            <section className={style.roundEndModal}>
                <CardsReveal />
                <NextRoundBtn onClicked={handleNextRound} />
                <section className={style.roundEndModalBtns}>
                    <QuitCircleBtn close={close} />
                    <MoviesBtn onClicked={() => {}} />
                    <RestartCircleBtn onClicked={() => {}} />
                </section>
            </section>
        </Modal>
    );
};

export default RoundEndModal;
