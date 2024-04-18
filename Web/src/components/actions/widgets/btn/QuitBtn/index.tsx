import React from "react";
import { TiHome } from "react-icons/ti";
import { QuitBtnProps } from "../../../../../models/types/props/btn";
import useGameActions from "../../../../../hooks/gameplay/useGameActions";
import SecondaryBtn from "../../../core/button/SecondaryBtn";

const QuitBtn: React.FC<QuitBtnProps> = ({ close }) => {
    const { handleQuit } = useGameActions(close);

    const title = (
        <span style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <TiHome /> End Game
        </span>
    );

    return <SecondaryBtn title={title} onClicked={handleQuit} size="large" />;
};

export default QuitBtn;