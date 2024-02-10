import { Movie } from "./movie";

export type Card = {
    position: number;
    id?: string;
    movie: Movie;
};

export type CardType = "Elected" | "Player" | "Shadow";

export type placeholderCardType =
    | { t: "Elected"; index: number }
    | { t: "Player"; movie: Movie }
    | { t: "Shadow" };
