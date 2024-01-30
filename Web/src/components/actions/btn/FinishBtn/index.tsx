import React, { useState } from "react";
import { useGamePlayContext } from "../../../../context/GamePlayContext";
import PrimaryBtn from "../../core/button/PrimaryBtn";
import useFinishPlacingCards from "../../../../hooks/useFinishPlacingCards";
import style from "./FinishBtn.module.css";
import { DONE_BTN_ID } from "../../../../models/constants";
import useSetScore from "../../../../hooks/useSetScore";

const FinishBtn: React.FC = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const { players, setFinish } = useGamePlayContext();
    const { isFinishPlacing } = useFinishPlacingCards(players);
    const { setScore } = useSetScore();

    const handleFinish = () => {
        setLoading(true);
        setScore();
        setFinish(true);
    };

    return (
        <React.Fragment>
            {isFinishPlacing ? (
                <PrimaryBtn
                    id={DONE_BTN_ID}
                    title="Finish"
                    onClicked={handleFinish}
                    disabled={!isFinishPlacing}
                    loading={loading}
                    size="small"
                />
            ) : (
                <p className={style.finishBtnP}>Drag and Drop your rating order</p>
            )}
        </React.Fragment>
    );
};

export default FinishBtn;
