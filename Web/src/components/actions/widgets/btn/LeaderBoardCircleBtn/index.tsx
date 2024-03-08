import React from "react";
import { IoTrophy } from "react-icons/io5";
import { LeaderBoardCircleBtnProps } from "../../../../../models/types/props/btn";
import CircleBtn from "../../../core/button/CircleBtn";

const LeaderBoardCircleBtn: React.FC<LeaderBoardCircleBtnProps> = ({ close }) => {

    return <CircleBtn onClicked={() => {}} Icon={<IoTrophy />} />;
};

export default LeaderBoardCircleBtn;
