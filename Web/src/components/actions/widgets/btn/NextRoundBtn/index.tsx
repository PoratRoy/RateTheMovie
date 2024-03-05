import React from "react";
import { FaPlay } from "react-icons/fa";
import PrimaryIconBtn from "../../../core/button/PrimaryIconBtn";
import { NextRoundBtnProps } from "../../../../../models/types/props/btn";
import useGameActions from "../../../../../hooks/gameplay/useGameActions";

const NextRoundBtn: React.FC<NextRoundBtnProps> = ({ close }) => {
    const { handleRestart } = useGameActions(close);
    
    const handleNextRound = () => {
        handleRestart("increase");
    };

    const title = (
        <span style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <FaPlay /> Next Round
        </span>
    );

    return <PrimaryIconBtn title={title} onClicked={handleNextRound} size="medium" />;
};

export default NextRoundBtn;
