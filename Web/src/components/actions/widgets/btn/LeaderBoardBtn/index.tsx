import React from "react";
import { LeaderBoardBtnProps } from "../../../../../models/types/props/btn";
import SecondaryBtn from "../../../core/button/SecondaryBtn";

const LeaderBoardBtn: React.FC<LeaderBoardBtnProps> = ({ id, title, onClicked }) => {
    return <SecondaryBtn id={id} onClicked={onClicked} title={title} size="mediomWide" />;
};

export default LeaderBoardBtn;
