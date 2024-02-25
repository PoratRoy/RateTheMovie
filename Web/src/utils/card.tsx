import DraggableMovie from "../components/cards/single/DraggableMovie";
import { PACK_CARDS_NUM } from "../models/constants";
import React from "react";
import { Player } from "../models/types/player";
import { Movie } from "../models/types/movie";
import { Card } from "../models/types/card";

export const initGameCard = (movie: Movie): Card => {
    return { id: movie.id, movie } as Card;
};

export const initGameCards = (movies: Movie[]) => {
    const cards: Card[] = movies.map((movie) => {
        return initGameCard(movie);
    });
    return cards;
};

export const setElectedFrontCard = (player: Player, movie: Movie | undefined) => {
    //TODO: was PackWrapper (deleted on 25.2) insted of section
    return (
        <section>
            {movie && movie.title ? (
                <DraggableMovie
                    id={`${movie.imdbID}-${player.id}`}
                    movie={movie}
                    player={player}
                    side="all"
                    size="small"
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
