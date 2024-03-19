import React from "react";
import style from "./AdditionalBtns.module.css";
import QuitCircleBtn from "../../../actions/widgets/btn/QuitCircleBtn";
import LeaderBoardCircleBtn from "../../../actions/widgets/btn/LeaderBoardCircleBtn";
import RestartCircleBtn from "../../../actions/widgets/btn/RestartCircleBtn";
import { AdditionalBtnsProps } from "../../../../models/types/props/view";
import MovieListLink from "../../../actions/widgets/link/MovieListLink";

const AdditionalBtns: React.FC<AdditionalBtnsProps> = ({ close, isSingle, isGameOver }) => {
    const quit = () => <QuitCircleBtn close={close} />;
    const movieList = () => (isSingle ? <MovieListLink /> : null);
    const restartOrLeaderBoard = () => {
        if (isSingle) {
            return isGameOver ? (
                <LeaderBoardCircleBtn close={close} />
            ) : (
                <RestartCircleBtn close={close} />
            );
        }
    };

    return (
        <section className={style.AdditionalBtnsContianer}>
            <section className={style.additionalBtns}>
                {quit()}
                {restartOrLeaderBoard()}
            </section>
            {movieList()}
        </section>
    );
};

export default AdditionalBtns;
