import React from "react";
import { IoTrophy } from "react-icons/io5";
import { LeaderBoardCircleBtnProps } from "../../../../../models/types/props/btn";
import CircleBtn from "../../../core/button/CircleBtn";

const LeaderBoardCircleBtn: React.FC<LeaderBoardCircleBtnProps> = ({ id, onClicked }) => {
    // return <CircleBtn id={id} onClicked={onClicked} Icon={<IoTrophy />} />;
    return <div id={id}></div>;
};

export default LeaderBoardCircleBtn;
