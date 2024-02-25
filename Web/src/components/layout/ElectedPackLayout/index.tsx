import React from "react";
import PackOfElectedCards from "../../cards/pack/PackOfElectedCards";
import FinishBtn from "../../actions/widgets/btn/FinishBtn";
import style from "./ElectedPackLayout.module.css";
import PlayAgainBtn from "../../actions/widgets/btn/PlayAgainBtn";
import { useGamePlayContext } from "../../../context/GamePlayContext";
import useHandleElectedCard from "../../../hooks/gameplay/useHandleElectedCard";
import { correctAnswers } from "../../../utils/correctOrder";

const ElectedPackLayout: React.FC = () => {
    const { currentPlayer, finishAnimation } = useGamePlayContext();
    const { isFinishPlacing } = useHandleElectedCard();
    const { playAgainBtn, showCorrectPack } = finishAnimation;

    return (
        <section className={style.electedPackContainer}>
            <div className={style.electedPack}>
                {currentPlayer ? (
                    <PackOfElectedCards
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
