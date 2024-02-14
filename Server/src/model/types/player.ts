import { ElectedCards } from "./card";
import { PlayerColor, PlayerRole } from "./union";

export type Player = {
    id: string; //TODO: was number
    name: string;
    color: PlayerColor;
    role: PlayerRole
    score: number;
    electedCards: ElectedCards;
};
