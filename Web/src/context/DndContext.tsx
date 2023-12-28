import { DndContext, DragEndEvent } from "@dnd-kit/core";
import { Card } from "../models/types/card";
import { useCardsContext } from "./CardsContext";
import { initCard } from "../models/initialization/card";

export const DndContextProvider = ({ children }: { children: React.ReactNode }) => {
    const { setSelectedCards } = useCardsContext();

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

    return <DndContext onDragEnd={handleDragEnd}>{children}</DndContext>;
};
