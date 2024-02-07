import React from "react";
import PackOfSelectedCards from "../../cards/pack/PackOfSelectedCards";
import FinishBtn from "../../actions/btn/FinishBtn";
import style from "./ElectedPackLayout.module.css";
import PlayAgainBtn from "../../actions/btn/PlayAgainBtn";
import { useGamePlayContext } from "../../../context/GamePlayContext";

const ElectedPackLayout: React.FC = () => {
    const { finishAnimation } = useGamePlayContext();
    const { players } = useGamePlayContext();

    return (
        <section className={style.electedPackContainer}>
            <div className={style.electedPack}>
                <PackOfSelectedCards />
            </div>
            {finishAnimation.playAgainBtn ? (
                <div className={style.playAgain}>
                    <div className={style.playAgainDescription}>
                        {players[0].rightChoices.length} correct ratings !
                    </div>
                    <PlayAgainBtn />
                </div>
            ) : (
                <div className={style.electedPackBtns}>
                    <FinishBtn />
                </div>
            )}
        </section>
    );
};

export default ElectedPackLayout;
