import React, { useEffect, useState } from "react";
import style from "./FinishBtn.module.css";
import { useCardsContext } from "../../../context/CardsContext";
import { PACK_CARDS_NUM } from "../../../models/constants";

const FinishBtn: React.FC = () => {
    const { selectedCards } = useCardsContext();
    const [isFinished, setIsFinished] = useState<boolean>(false);

    useEffect(() => {
        const isAllFilled = selectedCards.every((card) => card.movie !== undefined);
        setIsFinished(selectedCards.length === PACK_CARDS_NUM && isAllFilled ? true : false);
    }, [selectedCards]);

    const handleFinish = () => {
        console.log("selectedCards", selectedCards);
    };

    return (
        <button disabled={!isFinished} onClick={handleFinish} className={style.finishBtn}>
            Done
        </button>
    );
};

export default FinishBtn;
