import React from "react";
import SecondaryBtn from "../../../core/button/SecondaryBtn";
import { EditProfileBtnProps } from "../../../../../models/types/props/btn";

const EditProfileBtn: React.FC<EditProfileBtnProps> = ({ onClicked }) => {
    return <SecondaryBtn onClicked={onClicked} title="Edit Profile" size="medium" />;
};

export default EditProfileBtn;
