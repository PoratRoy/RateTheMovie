import React from "react";
import PrimaryIconBtn from "../../core/button/PrimaryIconBtn";
import { TiHome } from "react-icons/ti";
import { QuitBtnProps } from "../../../../models/types/props";
import useClear from "../../../../hooks/useClear";
import { useNavigate } from "react-router-dom";
import path from "../../../../router/routePath.json";

const QuitBtn: React.FC<QuitBtnProps> = ({ close }) => {
    const { handleClear } = useClear();
    const navigate = useNavigate();

    const handleQuit = () => {
        close();
        handleClear();
        navigate(path.land);
    };
    const title = (
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <TiHome /> Quit
        </div>
    );

    return <PrimaryIconBtn title={title} onClicked={handleQuit} size="medium" />;
};

export default QuitBtn;
