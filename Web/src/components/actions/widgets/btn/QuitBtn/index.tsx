import React from "react";
import PrimaryIconBtn from "../../../core/button/PrimaryIconBtn";
import { TiHome } from "react-icons/ti";
import { QuitBtnProps } from "../../../../../models/types/props/btn";
import useGameActions from "../../../../../hooks/gameplay/useGameActions";
//TODO: not in use
const QuitBtn: React.FC<QuitBtnProps> = ({ close }) => {
    const { handleQuit } = useGameActions(close);

    const title = (
        <span style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <TiHome /> Quit
        </span>
    );

    return <PrimaryIconBtn title={title} onClicked={handleQuit} size="medium" />;
};

export default QuitBtn;
