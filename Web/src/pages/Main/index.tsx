import React from "react";
import { useNavigate } from "react-router-dom";
import path from "../../router/routePath.json";

const Main: React.FC = () => {
    const navigate = useNavigate();

    const handleClickSinglePlayer = () => {
        navigate(path.filter);
    };

    const handleClickTwoPlayers = () => {
        navigate(path.game);
    };

    const handleClickMulti = () => {
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
