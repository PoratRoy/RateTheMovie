import React from "react";
import { TiHome } from "react-icons/ti";
import CircleBtn from "../../../core/button/CircleBtn";
import { QuitCircleBtnProps } from "../../../../../models/types/props/btn";
import useGameActions from "../../../../../hooks/gameplay/useGameActions";

const QuitCircleBtn: React.FC<QuitCircleBtnProps> = ({ close }) => {
    const { handleQuit } = useGameActions(close);
    return <CircleBtn onClicked={handleQuit} Icon={<TiHome />} />;
};

export default QuitCircleBtn;
