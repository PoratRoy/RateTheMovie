import React from "react";
import { PlayBtnProps } from "../../../../../models/types/props/btn";
import SecondaryBtn from "../../../core/button/SecondaryBtn";

const PlayBtn: React.FC<PlayBtnProps> = ({ id, title, onClicked }) => {
    return <SecondaryBtn id={id} onClicked={onClicked} title={title} />;
};

export default PlayBtn;
