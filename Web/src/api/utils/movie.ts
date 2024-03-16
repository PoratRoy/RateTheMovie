import { Card } from "../../models/types/card";

export const checkMoviesAlreadySet = (cards: Card[]): boolean =>
    cards.some((card) => card.movie.title !== "" || card.movie.id !== "");
