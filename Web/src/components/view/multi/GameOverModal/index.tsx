import React from "react";
import style from "./GameOverModal.module.css";
import RankingGameOverBoard from "../../../ranking/gameOver/RankingGameOverBoard";
import ExitGameBtn from "../../../actions/widgets/btn/ExitGameBtn";
import AdditionalBtns from "../../core/AdditionalBtns";
import { GameOverModalProps } from "../../../../models/types/props/view";

const GameOverModal: React.FC<GameOverModalProps> = ({ leaderBoardPlayers }) => {
    return (
        <section className={style.gameOverModal}>
            <RankingGameOverBoard players={leaderBoardPlayers} />
            <ExitGameBtn close={close} />
            <AdditionalBtns close={close} btns={["movieList"]} />
        </section>
    );
};

export default GameOverModal;
