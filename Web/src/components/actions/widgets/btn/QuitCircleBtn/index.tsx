import React from "react";
import { TiHome } from "react-icons/ti";
import CircleBtn from "../../../core/button/CircleBtn";
import { QuitCircleBtnProps } from "../../../../../models/types/props/btn";
import useClear from "../../../../../hooks/gameplay/useClear";
import { useNavigate } from "react-router-dom";
import path from "../../../../../router/routePath.json";

const QuitCircleBtn: React.FC<QuitCircleBtnProps> = ({ close }) => {
    const { handleClear } = useClear();
    const navigate = useNavigate();

    const handleQuit = () => {
        close();
        handleClear();
        navigate(path.land);
    };

    return <CircleBtn onClicked={handleQuit} Icon={<TiHome />} />;
};

export default QuitCircleBtn;
