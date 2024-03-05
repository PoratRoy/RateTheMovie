import React from "react";
import PackOfElectedCards from "../../cards/pack/PackOfElectedCards";
import FinishBtn from "../../actions/widgets/btn/FinishBtn";
import style from "./ElectedPackLayout.module.css";
import { useGamePlayContext } from "../../../context/GamePlayContext";
import useHandleElectedCard from "../../../hooks/gameplay/useHandleElectedCard";
import { useAnimationContext } from "../../../context/AnimationContext";

const ElectedPackLayout: React.FC = () => {
    const { currentPlayer } = useGamePlayContext();
    const { finishAnimation } = useAnimationContext();
    const { isFinishPlacing } = useHandleElectedCard();
    const { showCorrectPack } = finishAnimation;

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
            <div className={style.electedPackBtns}>
                <FinishBtn isFinishPlacing={isFinishPlacing} />
            </div>
        </section>
    );
};

export default ElectedPackLayout;
