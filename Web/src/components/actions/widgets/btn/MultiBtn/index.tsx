import React from "react";
import SecondaryBtn from "../../../core/button/SecondaryBtn";
import { MultiBtnProps } from "../../../../../models/types/props/btn";

const MultiBtn: React.FC<MultiBtnProps> = ({ id, title, onClicked }) => {
    return <SecondaryBtn id={id} onClicked={onClicked} title={title} />;
};

export default MultiBtn;
