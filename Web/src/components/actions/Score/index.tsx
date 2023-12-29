import React from "react";
import { ScoreProps } from "../../../models/types/props";

const Score: React.FC<ScoreProps> = ({ score }) => {
    return <div style={{ color: "white" }}>{score}</div>;
};

export default Score;
