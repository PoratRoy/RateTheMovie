import React from "react";
import style from "./Game.module.css";
import useDiscoverMovies from "../../api/hooks/useMoviesTMDB";
import PackOfCards from "../../components/cards/pack/PackOfCards";
import SelectedCards from "../../components/cards/pack/SelectedCards";

const Game: React.FC = () => {
    return (
        <section>
            <section>
                <SelectedCards />
            </section>
            <section>
                <PackOfCards />
            </section>
        </section>
    );
};

export default Game;
