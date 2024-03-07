import { ElectedCards } from "./card";
import { PlayerRole } from "./union";

export type Player = {
    id: string;
    name: string;
    avater: number;
    role: PlayerRole
    score: number;
    electedCards: ElectedCards;
};
