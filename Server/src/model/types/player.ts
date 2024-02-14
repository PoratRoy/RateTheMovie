import { ElectedCards } from "./card";
import { PlayerColor } from "./union";

export type Player = {
    id: string; //TODO: was number
    name: string;
    color: PlayerColor;
    score: number;
    electedCards: ElectedCards;
};
