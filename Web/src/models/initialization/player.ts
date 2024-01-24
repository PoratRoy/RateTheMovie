import { Player } from "../types/player";
import { PlayerColor } from "../types/union";

export const initPlayer = (id: number, color: PlayerColor): Player => {
    return {
        id,
        color,
        score: 0,
        selectedCards: [],
        rightChoices: [],
    } as Player;
};
