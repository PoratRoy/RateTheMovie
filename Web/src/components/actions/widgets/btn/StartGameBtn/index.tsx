import React from "react";
import PrimaryBtn from "../../../core/button/PrimaryBtn";
import { StartGameBtnProps } from "../../../../../models/types/props/btn";

const StartGameBtn: React.FC<StartGameBtnProps> = ({
    loading,
    title,
    id,
    onClicked = undefined,
    type = "button",
}) => {
    return (
        <PrimaryBtn
            id={id}
            title={title}
            onClicked={onClicked}
            loading={loading}
            size="large"
            type={type}
        />
    );
};

export default StartGameBtn;
