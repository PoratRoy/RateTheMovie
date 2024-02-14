import { GameRoomProps } from "../model/types/gameRoom";
import { Player } from "../model/types/player";

export const getPlayerIndex = (players: Player[]) => {
    return players.length;
}