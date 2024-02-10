import { DndContext, DragEndEvent } from "@dnd-kit/core";
import { initCard } from "../models/initialization/card";
import { useGamePlayContext } from "./GamePlayContext";
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
        const cardPosition = parseInt(over?.id.toString() || "-1");
        const movie: Movie = active?.data?.current?.movie;
        const player: Player = active?.data?.current?.player;

        if (movie && player) {
            const card: Card = { id: movie.id, movie, position: cardPosition };
            setPlayers((prev) => {
                const players = [...prev];
                const playerId = player.id;
                const selectedCards = players[playerId].selectedCards;

                if (cardPosition !== -1) {
                    const existingCard = selectedCards[cardPosition];
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
                    selectedCards[cardPosition] = card;
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
