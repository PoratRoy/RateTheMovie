import { Colors } from "../constants";
import { Player } from "../types/player";
import { PlayerColor, PlayerRole } from "../types/union";

export const initPlayer = (id: number, name: string, role: PlayerRole = "player"): Player => {
    return {
        id,
        name,
        color: Colors[id] as PlayerColor,
        role,
        score: 0,
        electedCards: {order: []},
    } as Player;
};
