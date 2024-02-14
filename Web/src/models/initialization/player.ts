import { Colors } from "../constants";
import { Player } from "../types/player";
import { PlayerColor } from "../types/union";

export const initPlayer = (id: number, name: string): Player => {
    return {
        id,
        name,
        color: Colors[id] as PlayerColor,
        score: 0,
        electedCards: {order: []},
    } as Player;
};
