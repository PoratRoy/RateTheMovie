import { PACK_CARDS_NUM } from "../models/constants";
import { GameCard, PlayerCard } from "../models/types/card";
import { Movie } from "../models/types/movie";
import { Player } from "../models/types/player";

export const isFinishPlacingElectedCards = (players: Player[], gameCards: GameCard[]) => {
    const moviesSelectedOrder: (Movie[] | undefined)[] = players.map((player: Player) => {
        const electedCards = player.electedCards;

        if (electedCards && electedCards.length === PACK_CARDS_NUM) {
            let movies: Movie[] = [];
            electedCards.forEach((card: PlayerCard | undefined) => {
                if (card && card.movieId !== undefined) {
                    gameCards.forEach((gameCard: GameCard) => {
                        if (gameCard.movie.id === card.movieId) {
                            movies.push(gameCard.movie);
                        }
                    });
                }
            });
            if (movies.length === PACK_CARDS_NUM) {
                return movies;
            }
        }
    });
    return moviesSelectedOrder[0] ? moviesSelectedOrder[0] : [...Array(PACK_CARDS_NUM)];
};
