import { Colors } from "../constants";
import { Player } from "../types/player";
import { PlayerColor, PlayerRole } from "../types/union";

export const initPlayer = (playerId: string, index: number, role: PlayerRole = "player") => {
    return {
        id: playerId,
        name: `Player ${index + 1}`,
        color: Colors[index] as PlayerColor,
        role,
        score: 0,
        electedCards: { order: [] },
    } as Player;
};
