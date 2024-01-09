import React from "react";
import { useGamePlayContext } from "../../../../context/GamePlayContext";
import PrimaryBtn from "../../core/button/PrimaryBtn";
import useFinishGame from "../../../../hooks/useFinishGame";
import useSetScore from "../../../../hooks/useSetScore";

const FinishBtn: React.FC = () => {
    const { players, setFinish } = useGamePlayContext();
    const { isFinished } = useFinishGame(players);
    const { setScore } = useSetScore();

    const handleFinish = () => {
        setFinish(true);
        setTimeout(() => {
            setScore();
        }, 4000);
    };

    return (
        <PrimaryBtn title="Finish" onClicked={handleFinish} disabled={!isFinished} size="small" />
    );
};

export default FinishBtn;
