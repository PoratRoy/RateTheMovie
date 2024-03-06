import React, { useEffect, useState } from "react";
import { useGamePlayContext } from "../../../../../context/GamePlayContext";
import PrimaryBtn from "../../../core/button/PrimaryBtn";
import useSetScore from "../../../../../hooks/gameplay/useSetScore";
import { DONE_BTN_ID } from "../../../../../models/constant";
import { FinishBtnProps } from "../../../../../models/types/props/btn";

const FinishBtn: React.FC<FinishBtnProps> = ({ isFinishPlacing }) => {
    const [loading, setLoading] = useState<boolean | undefined>(undefined);
    const { setFinishRound, finishRound, setGame } = useGamePlayContext();
    const { setScore } = useSetScore();

    const handleFinish = () => {
        setLoading(true);
        setScore();
        setFinishRound(true);
        setGame((prev) => ({ ...prev!, round: (prev?.currentRound ?? 1) + 1 }));
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
