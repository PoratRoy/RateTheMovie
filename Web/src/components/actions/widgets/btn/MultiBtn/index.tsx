import React from "react";
import { MultiBtnProps } from "../../../../../models/types/props/btn";
import PrimaryBtn from "../../../core/button/PrimaryBtn";

const MultiBtn: React.FC<MultiBtnProps> = ({ id, title, onClicked }) => {
    return (
        <PrimaryBtn
            id={id}
            title={title}
            onClicked={onClicked}
            type={"button"}
            size="large"
        />
    );
};

export default MultiBtn;
