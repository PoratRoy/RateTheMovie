import { ElectedCards, RivalCard } from "./card";
import { PlayerRole } from "./union";

export type Player = {
    id: string;
    name: string;
    role: PlayerRole;
    avater: number;
    score: number;
    electedCards: ElectedCards;
};

export type RivalPlayer = {
    id: string;
    name: string;
    avater: number;
    score: number;
    order: RivalCard;
    isReady?: boolean;//TODO: do I need this?
};