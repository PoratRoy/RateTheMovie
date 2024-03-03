import React from "react";
import { VscDebugRestart } from "react-icons/vsc";
import { RestartCircleBtnProps } from "../../../../../models/types/props/btn";
import CircleBtn from "../../../core/button/CircleBtn";

const RestartCircleBtn: React.FC<RestartCircleBtnProps> = ({ onClicked }) => {
    return <CircleBtn onClicked={onClicked} Icon={<VscDebugRestart />} />;
};

export default RestartCircleBtn;
