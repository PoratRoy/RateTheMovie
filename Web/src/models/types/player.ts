import { ElectedCards } from "./card";
import { PlayerColor, PlayerRole } from "./union";

export type Player = {
    id: number;
    name: string;
    role: PlayerRole;
    color: PlayerColor;
    score: number;
    electedCards: ElectedCards;
};
