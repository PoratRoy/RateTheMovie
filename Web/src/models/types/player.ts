import { ElectedCards } from "./card";
import { PlayerRole } from "./union";

export type Player = {
    id: string;
    connection?: string;
    name: string;
    role: PlayerRole;
    avatar: number;
    score: number;
    electedCards: ElectedCards;
};
