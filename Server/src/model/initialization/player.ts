import { getRandomNumber } from "../../utils/calc";
import { RivalPlayer } from "../types/player";
import { PlayerRole } from "../types/union";

//TODO: not in use
export const initPlayer = (playerId: string, index: number, role: PlayerRole = "player") => {
    return {
        id: playerId,
        name: `Player ${index + 1}`,
        avater: getRandomNumber(0, 9),
        role,
        score: 0,
        cards: [],
    } as RivalPlayer;
};
