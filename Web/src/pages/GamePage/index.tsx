import React, { useEffect } from "react";
import useDiscoverMovies from "../../api/hooks/useDiscoverMovies";
import SelectedCards from "../../components/cards/pack/SelectedCards";
import { Card } from "../../models/types/card";
import FinishBtn from "../../components/actions/FinishBtn";
import { useMovieContext } from "../../context/MovieContext";
import { useGamePlayContext } from "../../context/GamePlayContext";
import { Movie } from "../../models/types/movie";
import PackOfRightCards from "../../components/cards/pack/PackOfRightCards";
import { Player } from "../../models/types/player";
import PlayerLayout from "../../components/layout/PlayerLayout";

const GamePage: React.FC = () => {
    useDiscoverMovies();
    const { setCorrectOrder, players } = useGamePlayContext();
    const { movies } = useMovieContext();
    useEffect(() => {
        const sortedMovies = [...movies];

        sortedMovies.sort((a, b) => {
            const votesA = parseFloat(a.imdbRating || "0");
            const votesB = parseFloat(b.imdbRating || "0");
            return votesA - votesB;
        });

        const cards: Card[] = sortedMovies.map((movie: Movie, i: number) => {
            return { id: i.toString(), movie, rate: movie.imdbVotes } as Card;
        });
        setCorrectOrder(cards);
    }, [movies]);

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
