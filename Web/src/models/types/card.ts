import { Movie } from "./movie";

export type Card = {
    id?: string;
    movie: Movie;
    rate?: number;
};

export type placeholderCardType = { t: "Elected"; index: number } | { t: "Player"; movie: Movie };
