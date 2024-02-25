import React from "react";
import PrimaryIconBtn from "../../core/button/PrimaryIconBtn";
import { TiHome } from "react-icons/ti";
import { QuitBtnProps } from "../../../../models/types/props";

const QuitBtn: React.FC<QuitBtnProps> = ({ close }) => {
    const handleQuit = () => {
        close();
    };
    const title = (
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <TiHome /> Quit
        </div>
    );

    return <PrimaryIconBtn title={title} onClicked={handleQuit} size="medium" />;
};

export default QuitBtn;
