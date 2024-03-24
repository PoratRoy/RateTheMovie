import React, { useEffect, useState } from "react";
import PrimaryBtn from "../../../core/button/PrimaryBtn";
import { DONE_BTN_ID } from "../../../../../models/constant";
import { FinishBtnProps } from "../../../../../models/types/props/btn";
import useFinish from "../../../../../hooks/gameplay/useFinish";
import { useGameStatusContext } from "../../../../../context/GameStatusContext";
import { motion } from "framer-motion";

const FinishBtn: React.FC<FinishBtnProps> = ({ isFinishPlacing }) => {
    const [loading, setLoading] = useState<boolean | undefined>(undefined);
    const { gameStatus } = useGameStatusContext();
    const { finishGame } = useFinish();

    const handleFinish = () => {
        finishGame();
        setLoading(true);
    };

    useEffect(() => {
        if (!isFinishPlacing && loading && !gameStatus.isPlayerFinishRound) setLoading(false);
    }, [isFinishPlacing]);

    return (
        <motion.div
            initial={{ height: 0 }}
            animate={{
                height: isFinishPlacing ? 35 : 0,
                transition: { duration: 0.2 },
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
