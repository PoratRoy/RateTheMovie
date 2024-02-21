import React from "react";
import { useGamePlayContext } from "../../context/GamePlayContext";
import PlayerLayout from "../../components/layout/PlayerLayout";
import GameLayout from "../../components/layout/GameLayout";
import ElectedPackLayout from "../../components/layout/ElectedPackLayout";
import PlayersPackLayout from "../../components/layout/PlayersPackLayout";
import useCheckMoviesAlreadySet from "../../api/hooks/useCheckMoviesAlreadySet";
import { Player } from "../../models/types/player";

const GamePage: React.FC = () => {
    useCheckMoviesAlreadySet();
    const { players } = useGamePlayContext();

    return (
        <GameLayout>
            <ElectedPackLayout />
            <PlayersPackLayout>
                {players.map((player: Player, i: number) => (
                    <PlayerLayout key={i} player={player} />
                ))}
            </PlayersPackLayout>
        </GameLayout>
    );
};

export default GamePage;
