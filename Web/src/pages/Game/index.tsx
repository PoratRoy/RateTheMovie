import React from "react";
import style from "./Game.module.css";
import useDiscoverMovies from "../../api/hooks/useDiscoverMovies";
import PackOfCards from "../../components/cards/pack/PackOfCards";
import SelectedCards from "../../components/cards/pack/SelectedCards";
import { DndContext, DragEndEvent } from "@dnd-kit/core";
import { useCardsContext } from "../../context/CardsContext";
import { Card } from "../../models/types/card";
import { initCard } from "../../models/initialization/card";

const Game: React.FC = () => {
    useDiscoverMovies();
    const { setSelectedCards } = useCardsContext();

    function handleDragEnd(event: DragEndEvent) {
        const { over, active } = event;
        const id = over?.id.toString();
        const movie = active?.data?.current?.movie;

        if (movie && id) {
            const card: Card = { id, movie, rate: movie.imdbVotes };

            setSelectedCards((prev) => {
                const updatedCards = [...prev];
                const existingIndex = updatedCards.findIndex(
                    (c) => c?.movie?.title === card?.movie?.title,
                );

                if (existingIndex !== -1) {//exists
                    updatedCards[existingIndex] = initCard;
                }
                updatedCards[parseInt(id)] = card;
                return updatedCards;
            });
        }
    }

    return (
        <DndContext onDragEnd={handleDragEnd}>
            <SelectedCards />
            <PackOfCards />
        </DndContext>
    );
};

export default Game;

//const isAlreadyInPack = selectedCards.some((card: Card) => card.movie?.id === movie.id);

// setSelectedCards((prev) => {
//     const updatedCards = [...prev];
//     updatedCards[parseInt(id)] = card;
//     return updatedCards;
// });
