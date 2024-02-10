import { Player } from "../types/player";
import { PlayerColor } from "../types/union";

export const initPlayer = (id: number, color: PlayerColor, name: string): Player => {
    return {
        id,
        name,
        color,
        score: 0,
        selectedCards: [],
        rightChoices: [],
    } as Player;
};
