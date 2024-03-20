import React, { useState } from "react";
import Modal from "../../core/Modal";
import style from "./MultiRoundEndModal.module.css";
import { MultiRoundEndModalProps } from "../../../../models/types/props/view";
import { useSocketContext } from "../../../../context/SocketContext";
import RankingRoundBoard from "../../../ranking/round/RankingRoundBoard";
import RankingGameOverBoard from "../../../ranking/gameOver/RankingGameOverBoard";
import AdditionalBtns from "../../core/AdditionalBtns";
import TimerModal from "../../../actions/timer/TimerModal";
import ExitGameBtn from "../../../actions/widgets/btn/ExitGameBtn";
import useGameActions from "../../../../hooks/gameplay/useGameActions";

const MultiRoundEndModal: React.FC<MultiRoundEndModalProps> = ({ close, title, gameOver }) => {
    const { leaderBoardPlayers } = useSocketContext();
    const [finish, setFinish] = useState<boolean>(false);
    const { handleContinue } = useGameActions(close);

    const handleTimeOut = () => {
        gameOver ? setFinish(true) : handleContinue();
    };

    return (
        <Modal close={close} title={title}>
            {finish && gameOver ? (
                <section className={style.MultiRoundGameOver}>
                    <RankingGameOverBoard players={leaderBoardPlayers} />
                    <ExitGameBtn close={close} />
                    <AdditionalBtns close={close} btns={["movieList"]} />
                </section>
            ) : (
                <section className={style.MultiRoundEndModal}>
                    <RankingRoundBoard players={leaderBoardPlayers} />
                    <AdditionalBtns close={close} btns={["quit"]} />
                    <TimerModal activate handleTimeOut={handleTimeOut} />
                </section>
            )}
        </Modal>
    );
};

export default MultiRoundEndModal;
