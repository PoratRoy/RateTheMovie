import { Player } from "../models/types/player";

export const filterRivalPlayers = (players: Player[], player: Player | undefined) => {
    if (!player) return players;
    return players.filter((p) => p.id !== player.id);
};
