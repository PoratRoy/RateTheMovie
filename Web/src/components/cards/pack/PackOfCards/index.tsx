import React from "react";
import MyCard from "../../singel/MyCard";
import Pack from "../../core/Pack";
import { useMovieContext } from "../../../../context/MovieContext";
import { Movie } from "../../../../models/types/movie";
import { PackOfCardsProps } from "../../../../models/types/props";

const PackOfCards: React.FC<PackOfCardsProps> = ({player}) => {
    const { movies, movieLoading } = useMovieContext();
    return (
        <Pack>
            {movies.map((movie: Movie, i: number) => (
                <MyCard key={i} movie={movie} player={player} loading={movieLoading} />
            ))}
        </Pack>
    );
};

export default PackOfCards;
