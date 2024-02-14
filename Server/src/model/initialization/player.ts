import { Colors } from "../constants";
import { Player } from "../types/player";
import { PlayerColor } from "../types/union";

export const initPlayer = (playerId: string, index: number) => {
    return {
        id: playerId,
        name: `Player ${index + 1}`,
        color: Colors[index] as PlayerColor,
        score: 0,
        electedCards: { order: [] },
    } as Player;
};
