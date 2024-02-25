
import { PACK_CARDS_NUM } from "../models/constant";
import { Movie } from "../models/types/movie";
import { Player } from "../models/types/player";
import { getMoviesByCards } from "./movie";

export const isFinishPlacingElectedCards = (player: Player) => {
    //TODO: fix it [player]
    const moviesSelectedOrder: (Movie[] | undefined)[] = [player].map((player: Player) => {
        const electedCardsOrder = player.electedCards.order;

        if (electedCardsOrder && electedCardsOrder.length === PACK_CARDS_NUM) {
            const movies: Movie[] = getMoviesByCards(electedCardsOrder);
            if (movies.length === PACK_CARDS_NUM) {
                return movies;
            }
        }
    });
    return moviesSelectedOrder[0] ? moviesSelectedOrder[0] : [...Array(PACK_CARDS_NUM)];
};
