import React from "react";
import { useGamePlayContext } from "../../../context/GamePlayContext";

const Score: React.FC = () => {
    const { score } = useGamePlayContext();
    return <div style={{ color: "white" }}>{score}</div>;
};

export default Score;
