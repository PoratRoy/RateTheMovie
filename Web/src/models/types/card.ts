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

export type placeholderCardType =
    | { t: "Elected"; index: number, hasDecoration?: boolean}
    | { t: "Player"; card: Card }
    | { t: "Preview" };
