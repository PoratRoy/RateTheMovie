import React, { useEffect, useState } from "react";
import { useGamePlayContext } from "../../../../../context/GamePlayContext";
import PrimaryBtn from "../../../core/button/PrimaryBtn";
import { DONE_BTN_ID } from "../../../../../models/constant";
import { FinishBtnProps } from "../../../../../models/types/props/btn";
import useFinish from "../../../../../hooks/gameplay/useFinish";

const FinishBtn: React.FC<FinishBtnProps> = ({ isFinishPlacing }) => {
    const [loading, setLoading] = useState<boolean | undefined>(undefined);
    const { setFinishRound, finishRound } = useGamePlayContext();
    const { finishGame } = useFinish();

    const handleFinish = () => {
        finishGame();
        setLoading(true);
        setFinishRound(true);
    };

    useEffect(() => {
        if (!isFinishPlacing && loading && !finishRound) setLoading(false);
    }, [isFinishPlacing]);

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
                <React.Fragment />
            )}
        </React.Fragment>
    );
};

export default FinishBtn;
