import React from "react";
import SecondaryBtn from "../../../core/button/SecondaryBtn";
import { EditProfileBtnProps } from "../../../../../models/types/props/btn";

const EditProfileBtn: React.FC<EditProfileBtnProps> = ({ onClicked, toggle }) => {
    return (
        <SecondaryBtn
            onClicked={onClicked}
            title={toggle ? "Save Changes" : "Edit Profile"}
            size="mediomWide"
        />
    );
};

export default EditProfileBtn;
