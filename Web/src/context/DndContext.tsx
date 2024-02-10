import { DndContext, DragEndEvent } from "@dnd-kit/core";
import { initCard } from "../models/initialization/card";
import { useGamePlayContext } from "./GamePlayContext";
import { movieRating } from "../utils/format";
import { createContext, useContext, useState } from "react";
import { Movie } from "../models/types/movie";
import { Player } from "../models/types/player";
import { Card } from "../models/types/card";

export const DragContext = createContext<{ isDragging: boolean }>({ isDragging: false });

export const useDragContext = () => useContext(DragContext);

export const DndContextProvider = ({ children }: { children: React.ReactNode }) => {
    const { setPlayers } = useGamePlayContext();
    const [isDragging, setIsDragging] = useState<boolean>(false);

    function handleDragEnd(event: DragEndEvent) {
        setIsDragging(false);
        const { over, active } = event;
        const id = over?.id.toString();
        const movie: Movie = active?.data?.current?.movie;
        const player: Player = active?.data?.current?.player;

        if (movie && player) {
            const card: Card = { id, movie, rate: movieRating(movie.imdbRating) };

            setPlayers((prev) => {
                const players = [...prev];
                const playerId = player.id;
                const selectedCards = players[playerId].selectedCards;

                if (id) {
                    const cardId = parseInt(id);
                    const existingCard = selectedCards[cardId];
                    const existingIndex = selectedCards.findIndex(
                        (c) => c?.movie?.title === card?.movie?.title,
                    );
                    if (existingCard) {
                        //swap
                        selectedCards[existingIndex] = existingCard;
                    } else if (existingIndex !== -1) {
                        //alredy exists
                        selectedCards[existingIndex] = initCard;
                    }
                    selectedCards[cardId] = card;
                } else {
                    //remove
                    const selectedCard = selectedCards.find((c) => c?.movie?.id === movie.id);
                    if (selectedCard) {
                        const index = selectedCards.indexOf(selectedCard);
                        selectedCards[index] = undefined;
                    }
                }
                return players;
            });
        }
    }

    const handleDragStart = () => {
        if (!isDragging) {
            setIsDragging(true);
        }
    };

    return (
        <DndContext onDragEnd={handleDragEnd} onDragMove={handleDragStart}>
            <DragContext.Provider value={{ isDragging }}>{children}</DragContext.Provider>
        </DndContext>
    );
};
