import React from "react";
import PrimaryBtn from "../../../core/button/PrimaryBtn";
import { StartGameBtnProps } from "../../../../../models/types/props/btn";
import { LOADING_START_BTN_ID } from "../../../../../models/constant";

const StartGameBtn: React.FC<StartGameBtnProps> = ({ loading }) => {
    const handleStart = () => {};
    return (
        <PrimaryBtn
            id={LOADING_START_BTN_ID}
            title="Start The Game"
            onClicked={handleStart}
            loading={loading}
            size="large"
        />
    );
};

export default StartGameBtn;
