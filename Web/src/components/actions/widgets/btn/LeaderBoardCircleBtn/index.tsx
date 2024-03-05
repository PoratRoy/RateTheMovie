import React from "react";
import { VscDebugRestart } from "react-icons/vsc";
import { LeaderBoardCircleBtnProps } from "../../../../../models/types/props/btn";
import CircleBtn from "../../../core/button/CircleBtn";

const LeaderBoardCircleBtn: React.FC<LeaderBoardCircleBtnProps> = ({ close }) => {

    return <CircleBtn onClicked={() => {}} Icon={<VscDebugRestart />} />;
};

export default LeaderBoardCircleBtn;
