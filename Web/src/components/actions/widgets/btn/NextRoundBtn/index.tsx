import React from "react";
import { FaPlay } from "react-icons/fa";
import PrimaryIconBtn from "../../../core/button/PrimaryIconBtn";
import { NextRoundBtnProps } from "../../../../../models/types/props/btn";

const NextRoundBtn: React.FC<NextRoundBtnProps> = ({ onClicked }) => {
    const title = (
        <span style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <FaPlay /> Next Round
        </span>
    );

    return <PrimaryIconBtn title={title} onClicked={onClicked} size="medium" />;
};

export default NextRoundBtn;
