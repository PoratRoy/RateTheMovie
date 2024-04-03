import React, { useEffect, useState } from "react";
import PrimaryBtn from "../../../core/button/PrimaryBtn";
import { FinishBtnProps } from "../../../../../models/types/props/btn";
import useFinish from "../../../../../hooks/gameplay/useFinish";
import { motion } from "framer-motion";
import { DONE_BTN_ID } from "../../../../../models/constant/ids";
import { useGamePlayContext } from "../../../../../context/GamePlayContext";
import { DURATION_ANIMATION_2, DURATION_ANIMATION_4 } from "../../../../../models/constant/time";

const FinishBtn: React.FC<FinishBtnProps> = ({ isFinishPlacing }) => {
    const [loading, setLoading] = useState<boolean | undefined>(undefined);
    const { game } = useGamePlayContext();
    const { finishGame } = useFinish();

    const handleFinish = () => {
        finishGame();
        setLoading(true);
    };

    useEffect(() => {
        if (!isFinishPlacing && loading && !game?.isPlayerFinishRound) setLoading(false);
    }, [isFinishPlacing]);

    return (
        <motion.div
            initial={{ height: 0 }}
            animate={{
                height: isFinishPlacing ? 35 : 0,
                transition: {
                    duration: isFinishPlacing ? DURATION_ANIMATION_2 : DURATION_ANIMATION_4,
                },
            }}
        >
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
        </motion.div>
    );
};

export default FinishBtn;
