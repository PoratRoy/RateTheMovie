import { RivalCard } from "./card";
import { PlayerRole } from "./union";

export type RivalPlayer = {
    id: string;
    name: string;
    avater: number;
    role: PlayerRole
    score: number;
    cards: RivalCard[];
};
