import { ElectedCards } from "./card";
import { PlayerColor } from "./union";

export type Player = {
    id: number;
    name: string;
    color: PlayerColor;
    score: number;
    electedCards: ElectedCards;
};
