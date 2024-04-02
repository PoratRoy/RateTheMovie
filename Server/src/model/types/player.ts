import { ElectedCards } from "./card";
import { PlayerRole } from "./union";

export type Player = {
    id: string;
    connection?: string;
    name: string;
    avatar: number;
    role: PlayerRole
    score: number;
    electedCards: ElectedCards;
};
