import React from "react";
import PackOfSelectedCards from "../../cards/pack/PackOfSelectedCards";
import FinishBtn from "../../actions/btn/FinishBtn";
import style from "./ElectedPackLayout.module.css";
import PlayAgainBtn from "../../actions/btn/PlayAgainBtn";
import { useGamePlayContext } from "../../../context/GamePlayContext";
import useHandleElectedCard from "../../../hooks/useHandleElectedCard";
import { correctAnswers } from "../../../utils/correctOrder";

const ElectedPackLayout: React.FC = () => {
    const { currentPlayer, finishAnimation } = useGamePlayContext();
    const { isFinishPlacing } = useHandleElectedCard();
    const { playAgainBtn, showCorrectPack } = finishAnimation;

    return (
        <section className={style.electedPackContainer}>
            <div className={style.electedPack}>
                {currentPlayer ? (
                    <PackOfSelectedCards
                        currentPlayer={currentPlayer}
                        showCorrectPack={showCorrectPack}
                    />
                ) : null}
            </div>
            {playAgainBtn ? (
                <div className={style.playAgain}>
                    <div className={style.playAgainDescription}>
                        {correctAnswers(currentPlayer)} correct ratings !
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
