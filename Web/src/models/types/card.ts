import { Movie } from "./movie";

export type Card = {
    id: string | undefined;
    movie: Movie;
    isCorrect?: boolean;
};

export type ElectedCards = {
    order: (Card | undefined)[];
    correctOrder?: string[];
};

export type CardType = "Elected" | "Player" | "Shadow";

export type placeholderCardType =
    | { t: "Elected"; index: number }
    | { t: "Player"; card: Card }
    | { t: "Shadow" };
