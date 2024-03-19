import React from "react";
import PackOfElectedCards from "../../cards/pack/PackOfElectedCards";
import FinishBtn from "../../actions/widgets/btn/FinishBtn";
import style from "./ElectedPackLayout.module.css";
import { useGamePlayContext } from "../../../context/GamePlayContext";
import useHandleElectedCard from "../../../hooks/gameplay/useHandleElectedCard";

const ElectedPackLayout: React.FC = () => {
    const { currentPlayer, correctOrder } = useGamePlayContext();
    const { isFinishPlacing } = useHandleElectedCard();

    return (
        <section className={style.electedPackContainer}>
            <div className={style.electedPack}>
                {currentPlayer ? (
                    <PackOfElectedCards
                        currentPlayer={currentPlayer}
                        showCorrectPack={correctOrder}
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
