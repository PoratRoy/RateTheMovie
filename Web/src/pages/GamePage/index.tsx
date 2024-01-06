import React from "react";
import useDiscoverMovies from "../../api/hooks/useDiscoverMovies";
import { useGamePlayContext } from "../../context/GamePlayContext";
import { Player } from "../../models/types/player";
import PlayerLayout from "../../components/layout/PlayerLayout";
import useCorrectOrder from "../../hooks/useCorrectOrder";
import PackWrapper from "../../components/cards/pack/PackWrapper";
import GameLayout from "../../components/layout/GameLayout";
import ElectedPackLayout from "../../components/layout/ElectedPackLayout";

const GamePage: React.FC = () => {
    useDiscoverMovies();
    useCorrectOrder();
    const { players } = useGamePlayContext();

    return (
        <GameLayout>
            <ElectedPackLayout />
            <PackWrapper>
                {players.map((player: Player, i: number) => (
                    <PlayerLayout key={i} player={player} />
                ))}
            </PackWrapper>
        </GameLayout>
    );
};

export default GamePage;
