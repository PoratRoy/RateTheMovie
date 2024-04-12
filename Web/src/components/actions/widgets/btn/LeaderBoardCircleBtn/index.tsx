import React from "react";
import { LeaderBoardCircleBtnProps } from "../../../../../models/types/props/btn";
// import { IoTrophy } from "react-icons/io5";
// import CircleBtn from "../../../core/button/CircleBtn";

const LeaderBoardCircleBtn: React.FC<LeaderBoardCircleBtnProps> = ({ id }) => {
    // return <CircleBtn id={id} onClicked={onClicked} Icon={<IoTrophy />} />;
    return <div id={id}></div>;
};

export default LeaderBoardCircleBtn;
