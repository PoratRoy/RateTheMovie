import React, { useEffect } from "react";
import style from "./Game.module.css";
import useDiscoverMovies from "../../api/hooks/useDiscoverMovies";
import PackOfCards from "../../components/cards/pack/PackOfCards";
import SelectedCards from "../../components/cards/pack/SelectedCards";
import { DndContext, DragEndEvent } from "@dnd-kit/core";
import { useCardsContext } from "../../context/CardsContext";
import { Card } from "../../models/types/card";
import { initCard } from "../../models/initialization/card";
import FinishBtn from "../../components/actions/FinishBtn";
import { useMovieContext } from "../../context/MovieContext";
import { useGamePlayContext } from "../../context/GamePlayContext";
import Score from "../../components/actions/Score";
import { Movie } from "../../models/types/movie";
import PackOfRightCards from "../../components/cards/pack/PackOfRightCards";

const Game: React.FC = () => {
    useDiscoverMovies();
    const { setSelectedCards } = useCardsContext();
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

    function handleDragEnd(event: DragEndEvent) {
        const { over, active } = event;
        const id = over?.id.toString();
        const movie = active?.data?.current?.movie;

        if (movie) {
            const card: Card = { id, movie, rate: movie.imdbVotes };

            setSelectedCards((prev) => {
                const updatedCards = [...prev];
                const existingIndex = updatedCards.findIndex(
                    (c) => c?.movie?.title === card?.movie?.title,
                );

                if (id) {
                    const existingCard = updatedCards[parseInt(id)];
                    if (existingCard) {
                        //swap
                        updatedCards[existingIndex] = existingCard;
                    } else if (existingIndex !== -1) {
                        //alredy exists
                        updatedCards[existingIndex] = initCard;
                    }
                    updatedCards[parseInt(id)] = card;
                } else {
                    //remove
                    const selectedCard = updatedCards.find((c) => c?.movie?.id === movie.id);
                    if (selectedCard) {
                        updatedCards[updatedCards.indexOf(selectedCard)] = initCard;
                    }
                }
                return updatedCards;
            });
        }
    }

    return (
        <DndContext onDragEnd={handleDragEnd}>
            <PackOfRightCards />
            <SelectedCards />
            <PackOfCards />
            <FinishBtn />
            <Score />
        </DndContext>
    );
};

export default Game;
