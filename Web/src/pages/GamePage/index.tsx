import React from "react";
import useDiscoverMovies from "../../api/hooks/useDiscoverMovies";
import { useGamePlayContext } from "../../context/GamePlayContext";
import { Player } from "../../models/types/player";
import PlayerLayout from "../../components/layout/PlayerLayout";
import useCorrectOrder from "../../hooks/useCorrectOrder";
import GameLayout from "../../components/layout/GameLayout";
import ElectedPackLayout from "../../components/layout/ElectedPackLayout";
import PlayersPackLayout from "../../components/layout/PlayersPackLayout";

const GamePage: React.FC = () => {
    useDiscoverMovies();
    useCorrectOrder();
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
