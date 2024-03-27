import { DndContext, DragEndEvent, PointerSensor, useSensor, useSensors } from "@dnd-kit/core";
import { useGamePlayContext } from "./GamePlayContext";
import { createContext, useContext, useState } from "react";
import { Movie } from "../models/types/movie";
import { Player } from "../models/types/player";
import { Card } from "../models/types/card";
import { initGameCard } from "../models/initialization/card";

export const DragContext = createContext<{ isDragging: boolean }>({ isDragging: false });

export const useDragContext = () => useContext(DragContext);

export const DndContextProvider = ({ children }: { children: React.ReactNode }) => {
    const { setCurrentPlayer } = useGamePlayContext();
    const [isDragging, setIsDragging] = useState<boolean>(false);

    const sensors = useSensors(
        useSensor(PointerSensor, {
            activationConstraint: {
                distance: 8,
            },
        }),
    );

    function handleDragEnd(event: DragEndEvent) {
        setIsDragging(false);
        const { over, active } = event;
        const cardPosition = parseInt(over?.id.toString() || "-1");
        const movie: Movie = active?.data?.current?.movie;
        const player: Player = active?.data?.current?.player;

        if (movie && player) {
            const card: Card = { id: movie.id, movie };
            setCurrentPlayer((prev) => {
                const currentPlayer = { ...prev } as Player | undefined;
                if (!currentPlayer || currentPlayer.id !== player.id) return currentPlayer;
                const electedCardsOrder = currentPlayer.electedCards?.order;
                if (cardPosition !== -1) {
                    // Add card to the elected pack
                    const existingCard = electedCardsOrder[cardPosition];
                    const cardPlaceIndex = electedCardsOrder.findIndex(
                        (c) => c?.movie === card?.movie,
                    );
                    if (existingCard) {
                        // If the card is already in the elected pack, swap it with the new card
                        electedCardsOrder[cardPlaceIndex] = existingCard;
                    } else if (cardPlaceIndex !== -1) {
                        // If the card is already in the elected pack, swap it with the new card
                        electedCardsOrder[cardPlaceIndex] = initGameCard;
                    }
                    // Add the new card to the elected pack
                    electedCardsOrder[cardPosition] = card;
                } else {
                    // Remove card from the elected pack
                    const selectedCard = electedCardsOrder.find((c) => c?.movie === movie);
                    if (selectedCard) {
                        const index = electedCardsOrder.indexOf(selectedCard);
                        electedCardsOrder[index] = undefined;
                    }
                }
                return currentPlayer;
            });
        }
    }

    const handleDragStart = () => {
        if (!isDragging) {
            setIsDragging(true);
        }
    };

    return (
        <DndContext onDragEnd={handleDragEnd} onDragStart={handleDragStart} sensors={sensors}>
            <DragContext.Provider value={{ isDragging }}>{children}</DragContext.Provider>
        </DndContext>
    );
};
