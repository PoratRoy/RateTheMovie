import React from "react";
import PrimaryBtn from "../../../core/button/PrimaryBtn";
import { StartGameBtnProps } from "../../../../../models/types/props/btn";
import { LOADING_START_BTN_ID } from "../../../../../models/constant/ids";

const StartGameBtn: React.FC<StartGameBtnProps> = ({ loading, onClicked }) => {
    return (
        <PrimaryBtn
            id={LOADING_START_BTN_ID}
            title="Start Game"
            onClicked={onClicked}
            loading={loading}
            size="large"
        />
    );
};

export default StartGameBtn;
