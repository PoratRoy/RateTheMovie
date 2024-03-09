import React from "react";
import style from "./AdditionalBtns.module.css";
import QuitCircleBtn from "../../../actions/widgets/btn/QuitCircleBtn";
import MoviesBtn from "../../../actions/widgets/btn/MoviesBtn";
import LeaderBoardCircleBtn from "../../../actions/widgets/btn/LeaderBoardCircleBtn";
import RestartCircleBtn from "../../../actions/widgets/btn/RestartCircleBtn";
import { AdditionalBtnsProps } from "../../../../models/types/props/view";

const AdditionalBtns: React.FC<AdditionalBtnsProps> = ({ gameOver, close, isSingle }) => {
    const GameOverBtn = gameOver ? (
        <LeaderBoardCircleBtn close={close} />
    ) : (
        <RestartCircleBtn close={close} />
    );
    return (
        <section className={style.additionalBtns}>
            <QuitCircleBtn close={close} />
            {isSingle ? <MoviesBtn onClicked={() => {}} /> : null}
            {isSingle ? GameOverBtn : null}
        </section>
    );
};

export default AdditionalBtns;