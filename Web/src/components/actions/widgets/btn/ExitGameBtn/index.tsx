import React from "react";
import PrimaryIconBtn from "../../../core/button/PrimaryIconBtn";
import { TiHome } from "react-icons/ti";
import { ExitGameBtnProps } from "../../../../../models/types/props/btn";
import useGameActions from "../../../../../hooks/gameplay/useGameActions";

const ExitGameBtn: React.FC<ExitGameBtnProps> = ({ close }) => {
    const { handleQuit } = useGameActions(close);

    const title = (
        <span style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <TiHome /> Exit Game
        </span>
    );

    return <PrimaryIconBtn title={title} onClicked={handleQuit} size="medium" />;
};

export default ExitGameBtn;
