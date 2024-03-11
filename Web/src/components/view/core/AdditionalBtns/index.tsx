import React from "react";
import style from "./AdditionalBtns.module.css";
import QuitCircleBtn from "../../../actions/widgets/btn/QuitCircleBtn";
import LeaderBoardCircleBtn from "../../../actions/widgets/btn/LeaderBoardCircleBtn";
import RestartCircleBtn from "../../../actions/widgets/btn/RestartCircleBtn";
import { AdditionalBtnsProps } from "../../../../models/types/props/view";
import MovieListLink from "../../../actions/widgets/link/MovieListLink";

const AdditionalBtns: React.FC<AdditionalBtnsProps> = ({ close, isSingle, isGameOver }) => {
    return (
        <section className={style.AdditionalBtnsContianer}>
            <section className={style.additionalBtns}>
                <QuitCircleBtn close={close} />
                {isSingle && isGameOver ? <LeaderBoardCircleBtn close={close} /> : null}
                {isSingle ? <RestartCircleBtn close={close} /> : null}
            </section>
            {isSingle ? <MovieListLink close={close} /> : null}
        </section>
    );
};

export default AdditionalBtns;
