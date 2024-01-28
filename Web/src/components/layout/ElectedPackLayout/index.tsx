import React from "react";
import PackOfSelectedCards from "../../cards/pack/PackOfSelectedCards";
import FinishBtn from "../../actions/btn/FinishBtn";
import style from "./ElectedPackLayout.module.css";
import PlayAgainBtn from "../../actions/btn/PlayAgainBtn";
import FilterAgainBtn from "../../actions/btn/FilterAgainBtn";
import { useGamePlayContext } from "../../../context/GamePlayContext";

const ElectedPackLayout: React.FC = () => {
    const { finishAnimation } = useGamePlayContext()
    return (
        <section className={style.electedPackContainer}>
            {finishAnimation.playAgainBtn ? (
                <div className={style.playAgain}>
                    <PlayAgainBtn />
                    <FilterAgainBtn />
                </div>
            ) : (
                <React.Fragment>
                    <div className={style.electedPack}>
                        <PackOfSelectedCards />
                    </div>
                    <div className={style.electedPackBtns}>
                        <FinishBtn />
                    </div>
                </React.Fragment>
            )}
        </section>
    );
};

export default ElectedPackLayout;
