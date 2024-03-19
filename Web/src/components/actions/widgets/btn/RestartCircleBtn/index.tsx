import React from "react";
import { VscDebugRestart } from "react-icons/vsc";
import { RestartCircleBtnProps } from "../../../../../models/types/props/btn";
import CircleBtn from "../../../core/button/CircleBtn";
import useGameActions from "../../../../../hooks/gameplay/useGameActions";

const RestartCircleBtn: React.FC<RestartCircleBtnProps> = ({ close }) => {
    const { handleRestart } = useGameActions(close);
    return <CircleBtn onClicked={handleRestart} Icon={<VscDebugRestart />} />;
};

export default RestartCircleBtn;
