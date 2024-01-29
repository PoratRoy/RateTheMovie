import { Card } from "./card";
import { Movie } from "./movie";
import { PlayerColor } from "./union";

export type Player = {
    id: number;
    color: PlayerColor;
    score: number;
    selectedCards: (Card | undefined)[];
    rightChoices: Movie[];
};
