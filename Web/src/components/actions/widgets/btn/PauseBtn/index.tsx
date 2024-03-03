import React from "react";
import { FaPause } from "react-icons/fa6";
import { PauseBtnProps } from "../../../../../models/types/props/btn";
import CircleBtn from "../../../core/button/CircleBtn";

const PauseBtn: React.FC<PauseBtnProps> = ({ onClicked }) => {
    return <CircleBtn onClicked={onClicked} Icon={<FaPause />} />;
};

export default PauseBtn;
