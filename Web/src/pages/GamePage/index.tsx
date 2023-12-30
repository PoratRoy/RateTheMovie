import React from "react";
import useDiscoverMovies from "../../api/hooks/useDiscoverMovies";
import SelectedCards from "../../components/cards/pack/SelectedCards";
import FinishBtn from "../../components/actions/FinishBtn";
import { useGamePlayContext } from "../../context/GamePlayContext";
import PackOfRightCards from "../../components/cards/pack/PackOfRightCards";
import { Player } from "../../models/types/player";
import PlayerLayout from "../../components/layout/PlayerLayout";
import useCorrectOrder from "../../hooks/useCorrectOrder";

const GamePage: React.FC = () => {
    useDiscoverMovies();
    useCorrectOrder();
    const { players } = useGamePlayContext();

    return (
        <section>
            <PackOfRightCards />
            <SelectedCards />
            <FinishBtn />
            {players.map((player: Player, i: number) => (
                <PlayerLayout key={i} player={player} />
            ))}
        </section>
    );
};

export default GamePage;
