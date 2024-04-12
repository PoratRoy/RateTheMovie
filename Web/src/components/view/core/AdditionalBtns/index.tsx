import React from "react";
import style from "./AdditionalBtns.module.css";
import QuitCircleBtn from "../../../actions/widgets/btn/QuitCircleBtn";
import LeaderBoardCircleBtn from "../../../actions/widgets/btn/LeaderBoardCircleBtn";
import RestartCircleBtn from "../../../actions/widgets/btn/RestartCircleBtn";
import { AdditionalBtnsProps } from "../../../../models/types/props/view";
import MovieListLink from "../../../actions/widgets/link/MovieListLink";

const AdditionalBtns: React.FC<AdditionalBtnsProps> = ({ close, btns }) => {
    const movieList = () => (btns.includes("movieList") ? <MovieListLink /> : null);
    const quit = () => (btns.includes("quit") ? <QuitCircleBtn close={close} /> : null);
    const restart = () => (btns.includes("restart") ? <RestartCircleBtn close={close} /> : null);
    const leaderBoard = () =>
        btns.includes("leaderboard") ? <LeaderBoardCircleBtn onClicked={() => {}} /> : null;

    return (
        <section className={style.AdditionalBtnsContianer}>
            <section className={style.additionalBtns}>
                {restart()}
                {quit()}
                {leaderBoard()}
            </section>
            {movieList()}
        </section>
    );
};

export default AdditionalBtns;
