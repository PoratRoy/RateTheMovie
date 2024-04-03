import React from "react";
import { FaPlay } from "react-icons/fa";
import PrimaryIconBtn from "../../../core/button/PrimaryIconBtn";
import { NextRoundBtnProps } from "../../../../../models/types/props/btn";
import useGameActions from "../../../../../hooks/gameplay/useGameActions";
import { DELAY_ANIMATION_3 } from "../../../../../models/constant/time";

const NextRoundBtn: React.FC<NextRoundBtnProps> = ({ close }) => {
    const { handleContinue } = useGameActions(close);
    
    const handleNextRound = () => {
        setTimeout(() => {
            handleContinue();
        }, DELAY_ANIMATION_3);
    };

    const title = (
        <span style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <FaPlay /> Next Round
        </span>
    );

    return <PrimaryIconBtn title={title} onClicked={handleNextRound} size="medium" />;
};

export default NextRoundBtn;
