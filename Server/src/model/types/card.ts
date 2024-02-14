import { Movie } from "./movie";

export type Card = {
  id: string | undefined;
  movie: Movie;
};

export type ElectedCards = {
  order: (Card | undefined)[];
  correctOrder?: Card[];
};
