import { Player } from "../models/types/player";

export const filterRivalPlayers = (players: Player[], playerId: string | undefined) => {
    if (!playerId) return players;
    return players.filter((p) => p.id !== playerId);
};
