import React from "react";
import { PlayerBtnProps } from "../../../../models/types/props";
import SecondaryBtn from "../../core/button/SecondaryBtn";

const PlayerBtn: React.FC<PlayerBtnProps> = ({ id, title, onClicked, onFocused }) => {
    return <SecondaryBtn id={id} onClicked={onClicked} onFocused={onFocused} title={title} />;
};

export default PlayerBtn;
