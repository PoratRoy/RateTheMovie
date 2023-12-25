import React from "react";
import style from "./PackOfCards.module.css";
import MyCard from "../../singel/MyCard";
import Pack from "../../core/Pack";
import { useMovieContext } from "../../../../context/MovieContext";
import { Movie } from "../../../../models/types/movie";
import Draggable from "../../../dnd/Draggable";

const PackOfCards: React.FC = () => {
    const { movies, movieLoading } = useMovieContext();
    return (
        <Pack>
            {movies.map((movie: Movie, i: number) => (
                <Draggable key={i} draggableId={movie.id?.toString() || i.toString()} movie={movie}>
                    <MyCard movie={movie} loading={movieLoading} />
                </Draggable>
            ))}
        </Pack>
    );
};

export default PackOfCards;
