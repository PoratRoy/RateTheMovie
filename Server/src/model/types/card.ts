import { Movie } from "./movie";

export type Card = {
  id: string | undefined;
  movie: Movie;
};

export type RivalCard = {
  id: string;
  movie: Movie;
  isCorrect: boolean;
};
