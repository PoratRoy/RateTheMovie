import React from "react";
import style from "./PackOfCards.module.css";
import MyCard from "../../singel/MyCard";
import Pack from "../../core/Pack";
import { useMovieContext } from "../../../../context/MovieContext";
import { Movie } from "../../../../models/types/movie";

const PackOfCards: React.FC = () => {
    const { movies, movieLoading } = useMovieContext();

    return (
        <Pack>
            {movies.map((movie: Movie, i: number) => (
                <MyCard key={i} movie={movie} loading={movieLoading}/>
            ))}
        </Pack>
    );
};

export default PackOfCards;
