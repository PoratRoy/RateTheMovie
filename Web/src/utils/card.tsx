import PackWrapper from "../components/cards/wrapper/PackWrapper";
import DraggableMovie from "../components/cards/singel/DraggableMovie";
import { PACK_CARDS_NUM } from "../models/constants";
import React from "react";
import { Player } from "../models/types/player";
import { Movie } from "../models/types/movie";
import { GameCard } from "../models/types/card";

export const initGameCard = (movie: Movie, index: number, correctPosition?: number): GameCard => {
    return {
        correctPosition,
        position: index,
        id: movie.id,
        movie,
    } as GameCard;
};

export const initGameCards = (movies: Movie[], correctPositions?: number[]) => {
    const cards: GameCard[] = movies.map((movie, index) => {
        const correctPosition = correctPositions ? correctPositions[index] : undefined;
        return initGameCard(movie, index, correctPosition);
    });
    return cards;
};

export const setElectedFrontCard = (player: Player, movie: Movie | undefined) => {
    return (
        <PackWrapper>
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
        </PackWrapper>
    );
};

export const setPlaceholderText = (index: number): string | undefined => {
    if (index === 0) {
        return "Worst";
    } else if (index + 1 === PACK_CARDS_NUM) {
        return "Best";
    }
};
