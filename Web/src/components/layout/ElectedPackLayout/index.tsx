import React from "react";
import PackOfElectedCards from "../../cards/pack/PackOfElectedCards";
import FinishBtn from "../../actions/widgets/btn/FinishBtn";
import style from "./ElectedPackLayout.module.css";
import { useGamePlayContext } from "../../../context/GamePlayContext";
import useHandleElectedCard from "../../../hooks/gameplay/useHandleElectedCard";
import { ElectedPackLayoutProps } from "../../../models/types/props/layout";

const ElectedPackLayout: React.FC<ElectedPackLayoutProps> = ({ currentPlayer }) => {
    const { correctOrder } = useGamePlayContext();
    const { isFinishPlacing } = useHandleElectedCard();

    return (
        <section className={style.electedPackContainer}>
            <div className={style.electedPack}>
                <PackOfElectedCards currentPlayer={currentPlayer} showCorrectPack={correctOrder} />
            </div>
            <div className={style.electedPackBtns}>
                <FinishBtn isFinishPlacing={isFinishPlacing} />
            </div>
        </section>
    );
};

export default ElectedPackLayout;
