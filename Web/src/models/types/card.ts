import { Movie } from "./movie";

export type GameCard = {
    id?: string;
    movie: Movie;
    position: number;
    correctPosition?: number;
}

export type PlayerCard = {
    movie?: Movie;
    correct: boolean;
}

export type CardType = "Elected" | "Player" | "Shadow";

export type placeholderCardType =
    | { t: "Elected"; index: number }
    | { t: "Player"; card: GameCard }
    | { t: "Shadow" };


    // export type Card = {
    //     id: string;
    //     movie: Movie;
    // }
    
    // export type ElectedCards = {
    //     order: Card[];
    //     correctOrder: Card[];
    // }