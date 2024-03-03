import React from "react";
import PrimaryIconBtn from "../../../core/button/PrimaryIconBtn";
import { TiHome } from "react-icons/ti";
import useClear from "../../../../../hooks/gameplay/useClear";
import { useNavigate } from "react-router-dom";
import path from "../../../../../router/routePath.json";
import { QuitBtnProps } from "../../../../../models/types/props/btn";

const QuitBtn: React.FC<QuitBtnProps> = ({ close }) => {
    const { handleClear } = useClear();
    const navigate = useNavigate();

    const handleQuit = () => {
        close();
        handleClear();
        navigate(path.land);
    };
    const title = (
        <span style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <TiHome /> Quit
        </span>
    );

    return <PrimaryIconBtn title={title} onClicked={handleQuit} size="medium" />;
};

export default QuitBtn;
