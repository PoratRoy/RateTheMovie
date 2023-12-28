import React from "react";
import { useNavigate } from "react-router-dom";
import path from "../../router/routePath.json";
import { useGamePlayContext } from "../../context/GamePlayContext";

const Main: React.FC = () => {
    const navigate = useNavigate();
    const { setPlayers } = useGamePlayContext();

    const handleClickSinglePlayer = () => {
        setPlayers(1);
        navigate(path.filter);
    };

    const handleClickTwoPlayers = () => {
        setPlayers(2);
        navigate(path.game);
    };

    const handleClickMulti = () => {
        setPlayers(3);
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
