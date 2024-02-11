import { Movie } from "./movie";

export type GameCard = {
    id?: string;
    movie: Movie;
    position: number;
    correctPosition?: number;
}

export type PlayerCard = {
    movieId?: string;
    correct: boolean;
}

export type CardType = "Elected" | "Player" | "Shadow";

export type placeholderCardType =
    | { t: "Elected"; index: number }
    | { t: "Player"; card: GameCard }
    | { t: "Shadow" };
