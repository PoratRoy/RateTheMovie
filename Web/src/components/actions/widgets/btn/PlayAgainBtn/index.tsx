import React from "react";
import PrimaryIconBtn from "../../../core/button/PrimaryIconBtn";
import { VscDebugRestart } from "react-icons/vsc";
import { PlayAgainBtnProps } from "../../../../../models/types/props/btn";
import useGameActions from "../../../../../hooks/gameplay/useGameActions";

const PlayAgainBtn: React.FC<PlayAgainBtnProps> = ({ close }) => {
    const { handleRestart } = useGameActions(close);
    
    const title = (
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <VscDebugRestart /> Play Again
        </div>
    );

    return <PrimaryIconBtn title={title} onClicked={handleRestart} size="medium" />;
};

export default PlayAgainBtn;
