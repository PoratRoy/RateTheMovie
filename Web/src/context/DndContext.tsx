import { DndContext, DragEndEvent } from "@dnd-kit/core";
import { Card } from "../models/types/card";
import { initCard } from "../models/initialization/card";
import { useGamePlayContext } from "./GamePlayContext";
import { Movie } from "../models/types/movie";
import { Player } from "../models/types/player";
import { movieRating } from "../utils/format";

export const DndContextProvider = ({ children }: { children: React.ReactNode }) => {
    const { setPlayers, setCardsOrder } = useGamePlayContext();

    function handleDragEnd(event: DragEndEvent) {
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
                        setCardsOrder(existingIndex, existingCard);
                        selectedCards[existingIndex] = existingCard;
                    } else if (existingIndex !== -1) {
                        //alredy exists
                        setCardsOrder(existingIndex, undefined);
                        selectedCards[existingIndex] = initCard;
                    }
                    setCardsOrder(cardId, card);
                    selectedCards[cardId] = card;
                } else {
                    //remove
                    const selectedCard = selectedCards.find((c) => c?.movie?.id === movie.id);
                    if (selectedCard) {
                        const index = selectedCards.indexOf(selectedCard);
                        setCardsOrder(index, undefined);
                        selectedCards[index] = undefined;
                    }
                }
                return players;
            });
        }
    }

    return <DndContext onDragEnd={handleDragEnd}>{children}</DndContext>;
};
