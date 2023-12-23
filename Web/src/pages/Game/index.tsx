import React from "react";
import style from "./Game.module.css";
import useDiscoverMovies from "../../api/hooks/useMoviesTMDB";
import PackOfCards from "../../components/PackOfCards";

const Game: React.FC = () => {
    // const { movies, loading, error } = useDiscoverMovies();
    // console.log("movies", movies);
    // console.log("loading", loading)
    // console.log("error", error)
    return (
        <section>
            <PackOfCards />
        </section>
    );
};

export default Game;
