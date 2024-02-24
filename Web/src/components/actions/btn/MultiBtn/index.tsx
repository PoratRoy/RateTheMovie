import React from "react";
import { MultiBtnProps } from "../../../../models/types/props";
import SecondaryBtn from "../../core/button/SecondaryBtn";

const MultiBtn: React.FC<MultiBtnProps> = ({ id, title, onClicked }) => {
    return <SecondaryBtn id={id} onClicked={onClicked} title={title} />;
};

export default MultiBtn;
