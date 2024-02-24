import { ElectedCards } from "./card";
import { PlayerColor, PlayerRole } from "./union";

export type Player = {
    id: string; //TODO: was number
    name: string;
    avater: number;
    role: PlayerRole
    score: number;
    electedCards: ElectedCards;
};
