import React from "react";
import style from "./Game.module.css";
import useDiscoverMovies from "../../api/hooks/useMoviesTMDB";
import PackOfCards from "../../components/cards/pack/PackOfCards";

const Game: React.FC = () => {
    return (
        <section>
            <PackOfCards />
        </section>
    );
};

export default Game;
