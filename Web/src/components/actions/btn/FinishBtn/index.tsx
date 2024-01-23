import React, { useState } from "react";
import { useGamePlayContext } from "../../../../context/GamePlayContext";
import PrimaryBtn from "../../core/button/PrimaryBtn";
import useFinishPlacingCards from "../../../../hooks/useFinishPlacingCards";
import useSetScore from "../../../../hooks/useSetScore";
import style from "./FinishBtn.module.css";

const FinishBtn: React.FC = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const { players, setFinish } = useGamePlayContext();
    const { isFinishPlacing } = useFinishPlacingCards(players);
    const { setScore } = useSetScore();

    const handleFinish = () => {
        setLoading(true);
        setFinish(true);
        setScore();
    };

    return (
        <React.Fragment>
            {isFinishPlacing ? (
                <PrimaryBtn
                    title="Finish"
                    onClicked={handleFinish}
                    disabled={!isFinishPlacing}
                    loading={loading}
                    size="small"
                />
            ) : (
                <p className={style.finishBtnP}>Choose your rating order</p>
            )}
        </React.Fragment>
    );
};

export default FinishBtn;
