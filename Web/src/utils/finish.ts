import { PACK_CARDS_NUM } from "../models/constants";
import { PlayerCard } from "../models/types/card";
import { Movie } from "../models/types/movie";
import { Player } from "../models/types/player";

export const isFinishPlacingElectedCards = (players: Player[]) => {
    const moviesSelectedOrder: (Movie[] | undefined)[] = players.map((player: Player) => {
        const electedCards = player.electedCards;

        if (electedCards && electedCards.length === PACK_CARDS_NUM) {
            let movies: Movie[] = [];
            electedCards.forEach((card: PlayerCard | undefined) => {
                if (card && card.movie !== undefined) {
                    movies.push(card.movie);
                }
            });
            if (movies.length === PACK_CARDS_NUM) {
                return movies;
            }
        }
    });
    return moviesSelectedOrder[0] ? moviesSelectedOrder[0] : [...Array(PACK_CARDS_NUM)];
};
