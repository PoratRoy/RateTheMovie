import { ElectedCards } from "./card";
import { PlayerRole } from "./union";

export type Player = {
    id: number;
    name: string;
    role: PlayerRole;
    avater: number;
    score: number;
    electedCards: ElectedCards;
};
