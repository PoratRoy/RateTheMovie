import { Card } from "./card";
import { Movie } from "./movie";
import { PlayerColor } from "./union";

export type Player = {
    id: string;
    name: string;
    color: PlayerColor;
    score: number;
    selectedCards: (Card | undefined)[];
    rightChoices: Movie[];
};
