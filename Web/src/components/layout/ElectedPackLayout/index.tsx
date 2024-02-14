import React from "react";
import PackOfSelectedCards from "../../cards/pack/PackOfSelectedCards";
import FinishBtn from "../../actions/btn/FinishBtn";
import style from "./ElectedPackLayout.module.css";
import PlayAgainBtn from "../../actions/btn/PlayAgainBtn";
import { useGamePlayContext } from "../../../context/GamePlayContext";
import useHandleElectedCard from "../../../hooks/useHandleElectedCard";
import { correctAnswers } from "../../../utils/correctOrder";

const ElectedPackLayout: React.FC = () => {
    const { players, finishAnimation } = useGamePlayContext();
    const { isFinishPlacing } = useHandleElectedCard();

    return (
        <section className={style.electedPackContainer}>
            <div className={style.electedPack}>
                <PackOfSelectedCards />
            </div>
            {finishAnimation.playAgainBtn ? (
                <div className={style.playAgain}>
                    <div className={style.playAgainDescription}>
                        {correctAnswers(players[0])} correct ratings !
                    </div>
                    <PlayAgainBtn />
                </div>
            ) : (
                <div className={style.electedPackBtns}>
                    <FinishBtn isFinishPlacing={isFinishPlacing} />
                </div>
            )}
        </section>
    );
};

export default ElectedPackLayout;
