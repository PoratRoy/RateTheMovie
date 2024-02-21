import { DndContext, DragEndEvent } from "@dnd-kit/core";
import { useGamePlayContext } from "./GamePlayContext";
import { createContext, useContext, useState } from "react";
import { Movie } from "../models/types/movie";
import { Player } from "../models/types/player";
import { Card } from "../models/types/card";
import { initGameCard } from "../models/initialization/card";

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
            const card: Card = { id: movie.id, movie };

            setPlayers((prev) => {
                const players = [...prev];
                const playerId = player.id;
                const selectedCardsOrder = players[playerId].electedCards?.order;

                if (cardPosition !== -1) {
                    const existingCard = selectedCardsOrder[cardPosition];
                    const existingIndex = selectedCardsOrder.findIndex(
                        (c) => c?.movie === card?.movie,
                    );
                    if (existingCard) {
                        //swap
                        selectedCardsOrder[existingIndex] = existingCard;
                    } else if (existingIndex !== -1) {
                        //alredy exists
                        selectedCardsOrder[existingIndex] = initGameCard;
                    }
                    selectedCardsOrder[cardPosition] = card;
                } else {
                    //remove
                    const selectedCard = selectedCardsOrder.find((c) => c?.movie === movie);
                    if (selectedCard) {
                        const index = selectedCardsOrder.indexOf(selectedCard);
                        selectedCardsOrder[index] = undefined;
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
