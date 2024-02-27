import React, { useState } from "react";
import { useGamePlayContext } from "../../../../../context/GamePlayContext";
import PrimaryBtn from "../../../core/button/PrimaryBtn";
import style from "./FinishBtn.module.css";
import useSetScore from "../../../../../hooks/gameplay/useSetScore";
import { DONE_BTN_ID } from "../../../../../models/constant";
import { FinishBtnProps } from "../../../../../models/types/props/btn";

const FinishBtn: React.FC<FinishBtnProps> = ({isFinishPlacing}) => {
    const [loading, setLoading] = useState<boolean | undefined>(undefined);
    const { setFinish } = useGamePlayContext();
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
                <div className={style.finishBtnP}>Select your rating order</div>
            )}
        </React.Fragment>
    );
};

export default FinishBtn;
