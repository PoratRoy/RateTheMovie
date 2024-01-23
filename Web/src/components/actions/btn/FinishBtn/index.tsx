import React from "react";
import { useGamePlayContext } from "../../../../context/GamePlayContext";
import PrimaryBtn from "../../core/button/PrimaryBtn";
import useFinishGame from "../../../../hooks/useFinishGame";
import useSetScore from "../../../../hooks/useSetScore";
import style from "./FinishBtn.module.css";

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
        <React.Fragment>
            {isFinished ? (
                <PrimaryBtn
                    title="Finish"
                    onClicked={handleFinish}
                    disabled={!isFinished}
                    size="small"
                />
            ) : (
                <p className={style.finishBtnP}>Choose your rating order</p>
            )}
        </React.Fragment>
    );
};

export default FinishBtn;
