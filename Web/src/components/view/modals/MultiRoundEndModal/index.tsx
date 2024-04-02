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
import { useGamePlayContext } from "../../../../context/GamePlayContext";
import { SECOND_TIME } from "../../../../models/constant/time";

const MultiRoundEndModal: React.FC<MultiRoundEndModalProps> = ({ close, title, gameOver }) => {
    const { rivalPlayers } = useSocketContext();
    const { currentPlayer } = useGamePlayContext();
    const [finish, setFinish] = useState<boolean>(false);
    const { handleContinue } = useGameActions(close);

    const leaderBoardPlayers = rivalPlayers && currentPlayer ? [...rivalPlayers, currentPlayer] : [];

    const handleTimeOut = () => {
        setTimeout(() => {
            gameOver ? setFinish(true) : handleContinue();
        }, SECOND_TIME);
    };

    return (
        <Modal close={close} title={title} closeBtnType="quit" gameOver={gameOver} hasCloseBtn>
            {finish && gameOver ? (
                <section className={style.MultiRoundGameOver}>
                    <RankingGameOverBoard players={leaderBoardPlayers} />
                    <ExitGameBtn close={close} />
                    <AdditionalBtns close={close} btns={["movieList"]} />
                </section>
            ) : (
                <section className={style.MultiRoundEndModal}>
                    <RankingRoundBoard players={leaderBoardPlayers} />
                    <TimerModal handleTimeOut={handleTimeOut} />
                </section>
            )}
        </Modal>
    );
};

export default MultiRoundEndModal;
// let leaderBoardPlayers: Player[] = rivalPlayers ?? [];
// currentPlayer && leaderBoardPlayers.push(currentPlayer);
