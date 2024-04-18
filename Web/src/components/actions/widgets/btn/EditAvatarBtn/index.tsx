import React from "react";
import CircleBtn from "../../../core/button/CircleBtn";
import { MdEdit } from "react-icons/md";
import { EditAvatarBtnProps } from "../../../../../models/types/props/btn";

const EditAvatarBtn: React.FC<EditAvatarBtnProps> = ({ onClicked }) => {
    return <CircleBtn onClicked={onClicked} size="small" Icon={<MdEdit />} />;
};

export default EditAvatarBtn;
