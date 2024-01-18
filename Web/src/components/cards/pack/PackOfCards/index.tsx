import React from "react";
import PlayerCard from "../../singel/PlayerCard";
import Pack from "../../core/Pack";
import { useMovieContext } from "../../../../context/MovieContext";
import { Movie } from "../../../../models/types/movie";
import { PackOfCardsProps } from "../../../../models/types/props";

const PackOfCards: React.FC<PackOfCardsProps> = ({player}) => {
    const { movies, movieLoading } = useMovieContext();
    return (
        <Pack isWrap>
            {movies.map((movie: Movie, i: number) => (
                <PlayerCard key={i} movie={movie} player={player} loading={movieLoading} />
            ))}
        </Pack>
    );
};

export default PackOfCards;
