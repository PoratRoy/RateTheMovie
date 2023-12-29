import React from "react";
import { useNavigate } from "react-router-dom";
import path from "../../router/routePath.json";
import { useGamePlayContext } from "../../context/GamePlayContext";
import { initPlayer } from "../../models/initialization/player";

const Main: React.FC = () => {
    const navigate = useNavigate();
    const { setPlayers } = useGamePlayContext();
    const player1 = initPlayer(0, "red");
    const player2 = initPlayer(1, "blue");

    const handleClickSinglePlayer = () => {
        setPlayers([player1]);
        navigate(path.filter);
    };

    const handleClickTwoPlayers = () => {
        setPlayers([player1, player2]);
        navigate(path.game);
    };

    const handleClickMulti = () => {
        setPlayers([player1]);
        navigate(path.game);
    };

    return (
        <section>
            <button onClick={handleClickSinglePlayer}>Singel Player</button>
            <button onClick={handleClickTwoPlayers}>Two Players</button>
            <button onClick={handleClickMulti}>Multiplayer</button>
        </section>
    );
};

export default Main;
