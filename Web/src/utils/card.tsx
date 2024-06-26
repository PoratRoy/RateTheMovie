import DraggableMovie from "../components/cards/single/DraggableMovie";
import React from "react";
import { Player } from "../models/types/player";
import { Movie } from "../models/types/movie";
import { Card } from "../models/types/card";
import { PACK_CARDS_NUM } from "../models/constant";
import { CardSize } from "../models/types/union";

export const initGameCard = (movie: Movie): Card => {
    return { id: movie.id, movie } as Card;
};

export const initGameCards = (movies: Movie[]) => {
    const cards: Card[] = movies.map((movie) => {
        return initGameCard(movie);
    });
    return cards;
};

export const setElectedFrontCard = (player: Player, movie: Movie | undefined, size: CardSize = "medium") => {
    return (
        <section>
            {movie && movie.title ? (
                <DraggableMovie
                    id={`${movie.imdbID}-${player.id}`}
                    movie={movie}
                    player={player}
                    size={size}
                />
            ) : (
                <React.Fragment />
            )}
        </section>
    );
};

export const setPlaceholderText = (index: number): string | undefined => {
    if (index === 0) {
        return "Worst";
    } else if (index + 1 === PACK_CARDS_NUM) {
        return "Best";
    }
};

export const getElectedCardsFromCards = (electedCardsOrder: (Card | undefined)[]) => {
    let cards: Card[] = [];
    electedCardsOrder.forEach((card: Card | undefined) => {
        if (card && card.id !== undefined) {
            cards.push(card);
        }
    });
    return cards;
};