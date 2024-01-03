import React from "react";
import useDiscoverMovies from "../../api/hooks/useDiscoverMovies";
import PackOfSelectedCards from "../../components/cards/pack/PackOfSelectedCards";
import FinishBtn from "../../components/actions/FinishBtn";
import { useGamePlayContext } from "../../context/GamePlayContext";
import { Player } from "../../models/types/player";
import PlayerLayout from "../../components/layout/PlayerLayout";
import useCorrectOrder from "../../hooks/useCorrectOrder";
import style from "./GamePage.module.css"

const GamePage: React.FC = () => {
    useDiscoverMovies();
    useCorrectOrder();
    const { players } = useGamePlayContext();

    return (
        <section>
            <PackOfSelectedCards />
            <FinishBtn />
            <section className={style.gamePlayersLayout}>
                {players.map((player: Player, i: number) => (
                    <PlayerLayout key={i} player={player} />
                ))}
            </section>
        </section>
    );
};

export default GamePage;
