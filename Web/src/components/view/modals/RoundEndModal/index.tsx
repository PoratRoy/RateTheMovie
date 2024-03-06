import React, { useMemo, useState } from "react";
import Modal from "../../core/Modal";
import style from "./RoundEndModal.module.css";
import { RoundEndModalProps } from "../../../../models/types/props/view";
import NextRoundBtn from "../../../actions/widgets/btn/NextRoundBtn";
import QuitCircleBtn from "../../../actions/widgets/btn/QuitCircleBtn";
import MoviesBtn from "../../../actions/widgets/btn/MoviesBtn";
import RestartCircleBtn from "../../../actions/widgets/btn/RestartCircleBtn";
import CardsReveal from "../../../actions/CardsReveal";
import { useGamePlayContext } from "../../../../context/GamePlayContext";
import PlayAgainBtn from "../../../actions/widgets/btn/PlayAgainBtn";
import LeaderBoardCircleBtn from "../../../actions/widgets/btn/LeaderBoardCircleBtn";

const RoundEndModal: React.FC<RoundEndModalProps> = ({ close }) => {
    const { game, currentPlayer } = useGamePlayContext();
    const [title, setTitle] = useState<string>("");
    const gameOver = game?.currentRound === game?.rounds;

    useMemo(() => {
        setTitle(gameOver ? "GAME OVER" : `ROUND ${game?.currentRound || 1}`);
    }, []);

    return (
        <Modal close={close} title={title}>
            <section className={style.roundEndModal}>
                <div className={style.roundEndScore}>Score: {currentPlayer?.score}</div>
                <CardsReveal />
                {gameOver ? <PlayAgainBtn close={close} /> : <NextRoundBtn close={close} />}
                <section className={style.roundEndModalBtns}>
                    <QuitCircleBtn close={close} />
                    <MoviesBtn onClicked={() => {}} />
                    {gameOver ? (
                        <LeaderBoardCircleBtn close={close} />
                    ) : (
                        <RestartCircleBtn close={close} />
                    )}
                </section>
            </section>
        </Modal>
    );
};

export default RoundEndModal;
