import React from "react";
import style from "./PlayerScore.module.css";
import { PlayerScoreProps } from "../../../../models/types/props/view";

const PlayerScore: React.FC<PlayerScoreProps> = ({ id, score }) => {
    return (
        <div className={style.playerScore} id={id}>
            Score: {score}
        </div>
    );
};

export default PlayerScore;
