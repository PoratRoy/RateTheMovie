import React, { useMemo, useState } from "react";
import Modal from "../../core/Modal";
import style from "./MultiRoundEndModal.module.css";
import { MultiRoundEndModalProps } from "../../../../models/types/props/view";
import CardsReveal from "../../../actions/CardsReveal";
import { useGamePlayContext } from "../../../../context/GamePlayContext";
import GameOverBoard from "../../../common/GameOverBoard";
import { useSocketContext } from "../../../../context/SocketContext";
import { NEXT_ROUND_BTN_ID, SCORE_ID } from "../../../../models/constant";
import useMultiGameOverAnimation from "../../../../hooks/animation/useMultiGameOverAnimation";
import PlayAgainBtn from "../../../actions/widgets/btn/PlayAgainBtn";
import NextRoundBtn from "../../../actions/widgets/btn/NextRoundBtn";
import { DisplayNone } from "../../../../style/style";
import QuitCircleBtn from "../../../actions/widgets/btn/QuitCircleBtn";

const MultiRoundEndModal: React.FC<MultiRoundEndModalProps> = ({ close }) => {
    const { leaderBoardPlayers } = useSocketContext();
    const { scope } = useMultiGameOverAnimation(leaderBoardPlayers.length !== 0 ? true : false);
    const { game, currentPlayer } = useGamePlayContext();
    const [title, setTitle] = useState<string>("");
    const gameOver = game?.currentRound === game?.rounds;

    useMemo(() => {
        setTitle(gameOver ? "GAME OVER" : `ROUND ${game?.currentRound || 1}`);
    }, []);

    return (
        <Modal close={close} title={title}>
            <section ref={scope} className={style.MultiRoundEndModal}>
                <div className={style.MultiRoundEndScore} id={SCORE_ID}>
                    Score: {currentPlayer?.score}
                </div>
                <CardsReveal />
                <GameOverBoard players={leaderBoardPlayers} />
                <section
                    className={style.MultiRoundEndModalBtns}
                    id={NEXT_ROUND_BTN_ID}
                    style={DisplayNone}
                >
                    {gameOver ? <PlayAgainBtn close={close} /> : <NextRoundBtn close={close} />}
                    <section className={style.MultiRoundEndModalBtnsBtns}>
                        <QuitCircleBtn close={close} />
                    </section>
                </section>
            </section>
        </Modal>
    );
};

export default MultiRoundEndModal;
