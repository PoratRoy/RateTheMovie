import React from "react";
import PrimaryBtn from "../../../core/button/PrimaryBtn";
import { StartGameBtnProps } from "../../../../../models/types/props/btn";

const StartGameBtn: React.FC<StartGameBtnProps> = ({ loading }) => {
    const handleStart = () => {};
    return (
        <PrimaryBtn title="Start The Game" onClicked={handleStart} loading={loading} size="large" />
    );
};

export default StartGameBtn;
