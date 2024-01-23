import { Card } from "./card";
import { PlayerColor } from "./union";

export type Player = {
    id: number;
    color: PlayerColor;
    score: number;
    selectedCards: (Card | undefined)[];
};

export type SelectedOrder = {
    card: Card | undefined;
};
