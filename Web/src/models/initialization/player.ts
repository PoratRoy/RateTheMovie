import { Player } from "../types/player";
import { PlayerRole } from "../types/union";

export const initPlayer = (id: number, name: string, role: PlayerRole = "player"): Player => {
    return {
        id,
        name,
        avater: 0,
        role,
        score: 0,
        electedCards: {order: []},
    } as Player;
};
