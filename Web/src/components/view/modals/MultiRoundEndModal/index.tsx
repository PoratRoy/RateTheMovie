import React, { useState } from "react";
import Modal from "../../core/Modal";
import style from "./MultiRoundEndModal.module.css";
import { MultiRoundEndModalProps } from "../../../../models/types/props/view";
import { useSocketContext } from "../../../../context/SocketContext";
import useRoundEndModal from "../../../../hooks/gameplay/useRoundEndModal";
import RankingBoardTwo from "../../../ranking/round/RankingRoundBoard";
import RankingBoard from "../../../ranking/gameOver/RankingGameOverBoard";
import AdditionalBtns from "../../core/AdditionalBtns";
import TimerModal from "../../../actions/timer/TimerModal";
import ExitGameBtn from "../../../actions/widgets/btn/ExitGameBtn";
import useGameActions from "../../../../hooks/gameplay/useGameActions";

const MultiRoundEndModal: React.FC<MultiRoundEndModalProps> = ({ close }) => {
    const { leaderBoardPlayers } = useSocketContext();
    const { title, gameOver } = useRoundEndModal();
    const [finish, setFinish] = useState<boolean>(false);
    const { handleContinue } = useGameActions(close);

    const handleTimeOut = () => {
        gameOver ? setFinish(true) : handleContinue();
    };

    return (
        <Modal close={close} title={title}>
            {finish && gameOver ? (
                <section className={style.MultiRoundGameOver}>
                    <RankingBoard players={leaderBoardPlayers} />
                    <ExitGameBtn close={close} />
                    <AdditionalBtns close={close} btns={["movieList"]} />
                </section>
            ) : (
                <section className={style.MultiRoundEndModal}>
                    <RankingBoardTwo players={leaderBoardPlayers} />
                    <AdditionalBtns close={close} btns={["quit"]} />
                    <TimerModal activate handleTimeOut={handleTimeOut} />
                </section>
            )}
        </Modal>
    );
};

export default MultiRoundEndModal;
