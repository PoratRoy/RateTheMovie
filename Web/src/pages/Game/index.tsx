import React from "react";
import style from "./Game.module.css";
import useDiscoverMovies from "../../api/hooks/useDiscoverMovies";

const Game: React.FC = () => {
    const { movies, loading, error } = useDiscoverMovies();
    console.log("movies", movies)
    console.log("loading", loading)
    console.log("error", error)
    return <div>main</div>;
};

export default Game;
