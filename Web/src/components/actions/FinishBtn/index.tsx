import React, { useEffect, useState } from "react";
import style from "./FinishBtn.module.css";
import { useCardsContext } from "../../../context/CardsContext";
import { PACK_CARDS_NUM } from "../../../models/constants";
import { useGamePlayContext } from "../../../context/GamePlayContext";

const FinishBtn: React.FC = () => {
    const { selectedCards } = useCardsContext();
    const { rightOrder, setScore } = useGamePlayContext();
    const [isFinished, setIsFinished] = useState<boolean>(false);

    useEffect(() => {
        const isAllFilled = selectedCards.every((card) => card?.movie !== undefined);
        setIsFinished(selectedCards.length === PACK_CARDS_NUM && isAllFilled ? true : false);
    }, [selectedCards]);

    const handleFinish = () => {
        for (let i = 0; i < rightOrder.length; i++) {
            if (rightOrder[i].movie === selectedCards[i].movie) {
                setScore((prev) => prev + parseFloat(rightOrder[i]?.movie?.imdbRating || "0"));
            }
        }
    };

    return (
        <button disabled={!isFinished} onClick={handleFinish} className={style.finishBtn}>
            Done
        </button>
    );
};

export default FinishBtn;
