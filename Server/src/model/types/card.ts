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