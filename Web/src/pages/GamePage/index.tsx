import React, { useEffect } from "react";
import style from "./GamePage.module.css";
import useDiscoverMovies from "../../api/hooks/useDiscoverMovies";
import PackOfCards from "../../components/cards/pack/PackOfCards";
import SelectedCards from "../../components/cards/pack/SelectedCards";
import { Card } from "../../models/types/card";
import FinishBtn from "../../components/actions/FinishBtn";
import { useMovieContext } from "../../context/MovieContext";
import { useGamePlayContext } from "../../context/GamePlayContext";
import Score from "../../components/actions/Score";
import { Movie } from "../../models/types/movie";
import PackOfRightCards from "../../components/cards/pack/PackOfRightCards";

const GamePage: React.FC = () => {
    useDiscoverMovies();
    const { setRightOrder } = useGamePlayContext();
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
        setRightOrder(cards);
    }, [movies]);

    return (
        <section>
            <PackOfRightCards />
            <SelectedCards />
            <PackOfCards />
            <FinishBtn />
            <Score />
        </section>
    );
};

export default GamePage;
