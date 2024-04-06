import React from "react";
import style from "./RoundModal.module.css";
import { RoundModalProps } from "../../../../models/types/props/view";
import RankingRoundBoard from "../../../ranking/round/RankingRoundBoard";
import TimerModal from "../../../actions/timer/TimerModal";

const RoundModal: React.FC<RoundModalProps> = ({ leaderBoardPlayers, handleTimeOut }) => {
    return (
        <section className={style.roundModal}>
            <RankingRoundBoard players={leaderBoardPlayers} />
            <TimerModal handleTimeOut={handleTimeOut} />
        </section>
    );
};

export default RoundModal;
