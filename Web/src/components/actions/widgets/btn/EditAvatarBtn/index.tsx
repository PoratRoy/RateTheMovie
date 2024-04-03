import React from "react";
import CircleBtn from "../../../core/button/CircleBtn";
import { LuRefreshCcw } from "react-icons/lu";
import { EditAvatarBtnProps } from "../../../../../models/types/props/btn";

const EditAvatarBtn: React.FC<EditAvatarBtnProps> = ({ onClicked }) => {
    return <CircleBtn onClicked={onClicked} size="small" Icon={<LuRefreshCcw />} />;
};

export default EditAvatarBtn;
