import { getRandomNumber } from "../../utils/calc";
import { Player } from "../types/player";
import { PlayerRole } from "../types/union";

export const initPlayer = (id: number, name: string, role: PlayerRole = "player"): Player => {
    return {
        id,
        name,
        avater: getRandomNumber(0, 9),
        role,
        score: 0,
        electedCards: {order: []},
    } as Player;
};
