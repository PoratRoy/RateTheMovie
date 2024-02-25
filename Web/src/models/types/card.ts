import { Movie } from "./movie";

export type Card = {
    id: string | undefined;
    movie: Movie;
};

export type ElectedCards = {
    order: (Card | undefined)[];
    correctOrder?: Card[];
};

export type RivalCard = {
    id: string;
    movie: Movie;
    isCorrect: boolean;
};

export type CardType = "Elected" | "Player" | "Shadow";

export type placeholderCardType =
    | { t: "Elected"; index: number }
    | { t: "Player"; card: Card }
    | { t: "Shadow" };
