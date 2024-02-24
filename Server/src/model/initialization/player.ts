import { Player } from "../types/player";
import { PlayerRole } from "../types/union";

export const initPlayer = (playerId: string, index: number, role: PlayerRole = "player") => {
    return {
        id: playerId,
        name: `Player ${index + 1}`,
        avater: 0,
        role,
        score: 0,
        electedCards: { order: [] },
    } as Player;
};
