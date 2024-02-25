import React from "react";
import PrimaryIconBtn from "../../../core/button/PrimaryIconBtn";
import { VscDebugRestart } from "react-icons/vsc";
import { RestartBtnProps } from "../../../../../models/types/props/btn";

const RestartBtn: React.FC<RestartBtnProps> = ({ close }) => {
    const handleRestart = () => {
        close();
    };
    const title = (
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <VscDebugRestart /> Restart
        </div>
    );

    return <PrimaryIconBtn title={title} onClicked={handleRestart} size="medium" />;
};

export default RestartBtn;
