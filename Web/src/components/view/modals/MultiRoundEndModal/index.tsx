import React, { useState } from "react";
import Modal from "../../core/Modal";
import { MultiRoundEndModalProps } from "../../../../models/types/props/view";
import { useSocketContext } from "../../../../context/SocketContext";
import useGameActions from "../../../../hooks/gameplay/useGameActions";
import { useGamePlayContext } from "../../../../context/GamePlayContext";
import { SECOND_TIME } from "../../../../models/constant/time";
import GameOverModal from "../../multi/GameOverModal";
import RoundModal from "../../multi/RoundModal";
import WaitingModal from "../../multi/WaitingModal";

const MultiRoundEndModal: React.FC<MultiRoundEndModalProps> = ({ close, title, gameOver }) => {
    const { rivalPlayers } = useSocketContext();
    const { currentPlayer, game } = useGamePlayContext();
    const [finish, setFinish] = useState<boolean>(false);
    const { handleContinue } = useGameActions(close);

    const leaderBoardPlayers =
        rivalPlayers && currentPlayer ? [...rivalPlayers, currentPlayer] : [];

    const handleTimeOut = () => {
        setTimeout(() => {
            gameOver ? setFinish(true) : handleContinue();
        }, SECOND_TIME);
    };

    const setModal = () => {
        if (game) {
            const { isPlayerFinishRound, isRoundFinished } = game;

            if (isPlayerFinishRound) {
                if (isRoundFinished) {
                    if (finish && gameOver) {
                        <GameOverModal leaderBoardPlayers={leaderBoardPlayers} />;
                    }
                    return (
                        <RoundModal
                            leaderBoardPlayers={leaderBoardPlayers}
                            handleTimeOut={handleTimeOut}
                        />
                    );
                }
                return <WaitingModal />;
            }
        }
    };

    return (
        <Modal title={title} gameOver={gameOver}>
            {setModal()}
        </Modal>
    );
};

export default MultiRoundEndModal;
// let leaderBoardPlayers: Player[] = rivalPlayers ?? [];
// currentPlayer && leaderBoardPlayers.push(currentPlayer);
