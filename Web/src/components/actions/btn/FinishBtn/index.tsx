import React from "react";
import { useGamePlayContext } from "../../../../context/GamePlayContext";
import PrimaryBtn from "../../core/button/PrimaryBtn";
import useFinishGame from "../../../../hooks/useFinishGame";

const FinishBtn: React.FC = () => {
    const { players, setFinish } = useGamePlayContext();
    const { isFinished } = useFinishGame(players);

    const handleFinish = () => {
        setFinish(true);
    };

    return (
        <PrimaryBtn title="Finish" onClicked={handleFinish} disabled={!isFinished} size="small" />
    );
};

export default FinishBtn;
