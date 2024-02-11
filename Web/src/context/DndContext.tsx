import { DndContext, DragEndEvent } from "@dnd-kit/core";
import { initPlayerCard } from "../models/initialization/card";
import { useGamePlayContext } from "./GamePlayContext";
import { createContext, useContext, useState } from "react";
import { Movie } from "../models/types/movie";
import { Player } from "../models/types/player";
import { PlayerCard } from "../models/types/card";
import Session from "../utils/sessionStorage";
import { SessionKey } from "../models/enums/session";

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
            const card: PlayerCard = { movieId: movie.id, correct: false};
            
            setPlayers((prev) => {
                const players = [...prev];
                const playerId = player.id;
                const selectedCards = players[playerId].electedCards;

                if (cardPosition !== -1) {
                    const existingCard = selectedCards[cardPosition];
                    const existingIndex = selectedCards.findIndex(
                        (c) => c?.movieId === card?.movieId,
                    );
                    if (existingCard) {
                        //swap
                        selectedCards[existingIndex] = existingCard;
                    } else if (existingIndex !== -1) {
                        //alredy exists
                        selectedCards[existingIndex] = initPlayerCard;
                    }
                    selectedCards[cardPosition] = card;
                } else {
                    //remove
                    const selectedCard = selectedCards.find((c) => c?.movieId === movie.id);
                    if (selectedCard) {
                        const index = selectedCards.indexOf(selectedCard);
                        selectedCards[index] = undefined;
                    }
                }
                Session.remove(SessionKey.PLAYERS)
                Session.set(SessionKey.PLAYERS, players);
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
